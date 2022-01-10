<?php

/**
 *  * You are allowed to use this API in your web application.
 *
 * Copyright (C) 2018 by customweb GmbH
 *
 * This program is licenced under the customweb software licence. With the
 * purchase or the installation of the software in your application you
 * accept the licence agreement. The allowed usage is outlined in the
 * customweb software licence which can be found under
 * http://www.sellxed.com/en/software-license-agreement
 *
 * Any modification or distribution is strictly forbidden. The license
 * grants you the installation in one application. For multiuse you will need
 * to purchase further licences at http://www.sellxed.com/shop.
 *
 * See the customweb software licence agreement for more details.
 *
 */

//require_once 'Customweb/Core/DateTime.php';
//require_once 'Customweb/BNPMercanet/Authorization/Transaction.php';
//require_once 'Customweb/Payment/Authorization/ITransactionCapture.php';
//require_once 'Customweb/Payment/BackendOperation/Adapter/Shop/ICapture.php';
//require_once 'Customweb/BNPMercanet/Update/DiagnosticParameterBuilder.php';
//require_once 'Customweb/Util/Currency.php';
//require_once 'Customweb/Payment/Update/IAdapter.php';
//require_once 'Customweb/I18n/Translation.php';
//require_once 'Customweb/BNPMercanet/Util.php';
//require_once 'Customweb/BNPMercanet/AbstractOfficeAdapter.php';
//require_once 'Customweb/Util/Invoice.php';



/**
 *
 * @author Thomas Hunziker
 * @Bean
 */
class Customweb_BNPMercanet_Update_Adapter extends Customweb_BNPMercanet_AbstractOfficeAdapter implements 
		Customweb_Payment_Update_IAdapter {

	protected function getEndpoint(){
		return $this->getConfiguration()->getDiagnosticEndPointUrl();
	}

	public function updateTransaction(Customweb_Payment_Authorization_ITransaction $transaction){
		if (!($transaction instanceof Customweb_BNPMercanet_Authorization_Transaction)) {
			throw new Exception("Unable to cast transaction variable to Customweb_BNPMercanet_Authorization_Transaction.");
		}
		
		if (!$transaction->isLiveTransaction()) {
			try {
				$this->checkLiveAvailability();
			}
			catch (Exception $e) {
				$transaction->addErrorMessage($e->getMessage());
				//Test Mode: Intervall not that important
				$transaction->setUpdateExecutionDate(
						Customweb_Core_DateTime::_()->addMinutes(Customweb_BNPMercanet_Util::UPDATE_INTERVAL_AUTHORIZED));
				return;
			}
			//In Test mode mark this as successfull
			if ($transaction->getStatusAfterReceivingUpdate() == 'pending') {
				$transaction->setAuthorizationUncertain(false);
				$transaction->setStatusAfterReceivingUpdate('success');
			}
			//We always capture the test transaction, if set to autocapture
			if ($transaction->isCapturePossible() && $transaction->getCaptureMode() == 'AUTHOR_CAPTURE') {
				$transaction->capture();
				$container = $this->getContainer();
				if ($container->hasBean('Customweb_Payment_BackendOperation_Adapter_Shop_ICapture')) {
					$captureAdapter = $container->getBean('Customweb_Payment_BackendOperation_Adapter_Shop_ICapture');
					if ($captureAdapter instanceof Customweb_Payment_BackendOperation_Adapter_Shop_ICapture) {
						$captureAdapter->capture($transaction);
					}
				}
			}
			$transaction->setUpdateExecutionDate(null);
			return;
		}
		
		$builder = new Customweb_BNPMercanet_Update_DiagnosticParameterBuilder($this->getContainer(), $transaction);
		$params = $builder->build();
		$response = null;
		try {
			$response = $this->processWithSealValidation($params);
		}
		catch (Exception $e) {
			$transaction->addErrorMessage($e->getMessage());
			//If error occures try again after short interval
			$transaction->setUpdateExecutionDate(
					Customweb_Core_DateTime::_()->addMinutes(Customweb_BNPMercanet_Util::UPDATE_INTERVAL_NONAUTHORIZED));
			return;
		}
		
		if (!isset($response['responseCode'])) {
			//If error occures try again after short interval
			$transaction->setUpdateExecutionDate(
					Customweb_Core_DateTime::_()->addMinutes(Customweb_BNPMercanet_Util::UPDATE_INTERVAL_NONAUTHORIZED));
		}
		
		if (!$transaction->isAuthorized() && !$transaction->isAuthorizationFailed()) {
			
			$response['transactionReference'] = $params['transactionReference'];
			
			if ($response['responseCode'] == '40') {
				//Action not allowed, not active for this account, we can use a longer time out here, because the activation takes a day
				$transaction->addErrorMessage(Customweb_I18n_Translation::__('The transaction update feature is not active on this account'));
				$transaction->setUpdateExecutionDate(
						Customweb_Core_DateTime::_()->addMinutes(Customweb_BNPMercanet_Util::UPDATE_INTERVAL_AUTHORIZED));
				return;
			}
			if ($response['responseCode'] == '25' || $response['responseCode'] == '99') {
				//Transaction not yet available for updates or server problems at PSP
				$transaction->setUpdateExecutionDate(
						Customweb_Core_DateTime::_()->addMinutes(Customweb_BNPMercanet_Util::UPDATE_INTERVAL_NONAUTHORIZED));
				return;
			}
			
			if ($response['responseCode'] != '00' && $response['responseCode'] != '60') {
				$transaction->setAuthorizationParameters(array(
					'responseCode' => $response['responseCode'] 
				));
				$transaction->setAuthorizationFailed(Customweb_BNPMercanet_Util::getErrorMessageByResponseCode($response['responseCode']));
				$transaction->setUpdateExecutionDate(null);
				return;
			}
			
			$transaction->setAuthorizationParameters($response);
			$transaction->setPaymentId($params['transactionReference']);
			$transaction->authorize();
			
			if ($response['responseCode'] == '60') {
				$transaction->setUpdateExecutionDate(
						Customweb_Core_DateTime::_()->addMinutes(Customweb_BNPMercanet_Util::UPDATE_INTERVAL_AUTHORIZED));
				$transaction->setStatusAfterReceivingUpdate('pending');
				$transaction->setAuthorizationUncertain();
			}
			if (isset($response['captureDay'])) {
				$transaction->setCaptureDelay($response['captureDay']);
			}
		}
		
		if ($transaction->getStatusAfterReceivingUpdate() == 'pending') {
			if ($response['responseCode'] == '00') {
				$transaction->setAuthorizationUncertain(false);
				$transaction->setStatusAfterReceivingUpdate('success');
			}
			else if ($response['responseCode'] == '60') {
				//Status not changed
				$transaction->setUpdateExecutionDate(
						Customweb_Core_DateTime::_()->addMinutes(Customweb_BNPMercanet_Util::UPDATE_INTERVAL_AUTHORIZED));
				return;
			}
			else if ($response['responseCode'] == '40') {
				//Action not allowed, not active for this account
				$transaction->addErrorMessage(Customweb_I18n_Translation::__('The transaction update feature is not active on this account'));
				$transaction->setUpdateExecutionDate(
						Customweb_Core_DateTime::_()->addMinutes(Customweb_BNPMercanet_Util::UPDATE_INTERVAL_AUTHORIZED));
				return;
			}
			else {
				$transaction->setStatusAfterReceivingUpdate('refused');
				$transaction->setUncertainTransactionFinallyDeclined();
			}
		}
		
		if ($transaction->getStatusAfterReceivingUpdate() == 'refused') {
			return;
		}
		if ($transaction->getStatusAfterReceivingUpdate() == 'pending') {
			$transaction->setUpdateExecutionDate(
					Customweb_Core_DateTime::_()->addMinutes(Customweb_BNPMercanet_Util::UPDATE_INTERVAL_AUTHORIZED));
			return;
		}
		
		if (isset($response['transactionStatus']) && strtolower($response['transactionStatus']) == 'captured') {
			
			$capturingItems = $transaction->getCaptures();
			if (count($capturingItems) > 0) {
				// Since we have some capture items, we need only to set them as successful captures. 
				foreach ($capturingItems as $item) {
					/* @var $item Customweb_Payment_Authorization_DefaultTransactionCapture */
					$item->setStatus(Customweb_Payment_Authorization_ITransactionCapture::STATUS_SUCCEED);
				}
			}
			else {
				$container = $this->getContainer();
				$amount = Customweb_Util_Currency::formatAmount(
						$response['currentAmount'] / pow(10, Customweb_Util_Currency::getDecimalPlaces($transaction->getCurrencyCode())), 
						$transaction->getCurrencyCode());
				$items = Customweb_Util_Invoice::getItemsByReductionAmount($transaction->getUncapturedLineItems(), $amount, 
						$transaction->getCurrencyCode());
				$transaction->partialCaptureByLineItems($items, true);
				if ($container->hasBean('Customweb_Payment_BackendOperation_Adapter_Shop_ICapture')) {
					$captureAdapter = $container->getBean('Customweb_Payment_BackendOperation_Adapter_Shop_ICapture');
					if ($captureAdapter instanceof Customweb_Payment_BackendOperation_Adapter_Shop_ICapture) {
						$captureAdapter->partialCapture($transaction, $items, true);
					}
				}
			}
		}
		else {
			$reschedule = false;
			$capturingItems = $transaction->getCaptures();
			if (count($capturingItems) > 0) {
				// Reschedule if one capture item is still pending 
				foreach ($capturingItems as $item) {
					/* @var $item Customweb_Payment_Authorization_DefaultTransactionCapture */
					if ($item->getStatus() == Customweb_Payment_Authorization_ITransactionCapture::STATUS_PENDING) {
						$reschedule = true;
						break;
					}
				}
			}
			else if ($transaction->isCapturePossible()) {
				$reschedule = true;
			}
			
			if ($reschedule) {
				$transaction->setUpdateExecutionDate(Customweb_Core_DateTime::_()->addMinutes(Customweb_BNPMercanet_Util::UPDATE_INTERVAL_AUTHORIZED));
			}
		}
	}
}
	
