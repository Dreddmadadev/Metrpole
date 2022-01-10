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

//require_once 'Customweb/Util/Rand.php';
//require_once 'Customweb/Util/Currency.php';
//require_once 'Customweb/BNPMercanet/Method/Default.php';
//require_once 'Customweb/Payment/Util.php';



/**
 *
 * @author Thomas Hunziker
 * @Method(paymentMethods={'CetelemPresto'})
 */
class Customweb_BNPMercanet_Method_Presto extends Customweb_BNPMercanet_Method_Default {

	public function getRedirectionAuthorizationFields(Customweb_BNPMercanet_Authorization_Transaction $transaction, array $formData){
		$parameters = parent::getRedirectionAuthorizationFields($transaction, $formData);
		$parameters['paymentPattern'] = 'ONE_SHOT';
		$parameters['orderId'] = $this->formatSchemaForOrderId($transaction->getTransactionId(), 13);
		$parameters['paymentMeanData.presto.paymentMeanCustomerId'] = $this->formatSchemaForOrderId($transaction->getTransactionId(), 21);
		$parameters['customerLanguage'] = 'fr';
		$type = $this->getPaymentMethodConfigurationValue('cetelem_type');
		if($type == 'CCH' && Customweb_Util_Currency::compareAmount($transaction->getAuthorizationAmount(), 1500, $transaction->getCurrencyCode()) <= 0){
			$parameters['paymentMeanData.presto.financialProduct'] = 'CCH';
			$parameters['paymentMeanData.presto.prestoCardType'] = 'A';
		}
		else{
			$parameters['paymentMeanData.presto.financialProduct'] = 'CLA';
		}
		
		$product = $this->getPaymentMethodConfigurationValue('cetelem_product');
		$parameters['shoppingCartDetail.mainProduct'] = $product;		
		return $parameters;
	}

	
	private function formatSchemaForOrderId($transactionId, $length){
		$configuration = $this->getContainer()->getBean('Customweb_BNPMercanet_Configuration');
		$schema = $configuration->getTransactionReferenceSchema();
		$transactionId = preg_replace('/[^0-9A-Z]+/i', '', $transactionId);
		
		// We add a random part to ensure, that the reference will be always unique. In
		// test mode all merchant use the same account, hence the transaction reference is
		// hard to get unique, without randomness.
		if ($configuration->isTestMode()) {
			$schema = Customweb_Util_Rand::getRandomString(6) . $schema;
		}
		
		$transactionId = Customweb_Payment_Util::applyOrderSchemaImproved($schema, $transactionId, $length);
		// We filter the transaction ID again in case the merchant adds a invalid char over the schema.
		$transactionId = preg_replace('/[^0-9A-Z]+/i', '', $transactionId);
		return $transactionId;
	}
	
	public function getCaptureModeFields(Customweb_BNPMercanet_Authorization_Transaction $transaction){
		return array(
			'captureMode' => 'IMMEDIATE', 
			'captureDay' => 0
		);
	}
	
	public function isNFoisActivated(){
		return false;
	}
	
	
}