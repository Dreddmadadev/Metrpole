<?php 
/**
  * You are allowed to use this API in your web application.
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

//require_once 'Customweb/BNPMercanet/Method/Default.php';


/**
 * 
 * @author Thomas Hunziker
 * @Method(paymentMethods={'Visa', 'MasterCard', 'CreditCard', 'Maestro', 'VPAY', 'VisaElectron', 'AmericanExpress', 'CarteBancaire'})
 * 
 */
class Customweb_BNPMercanet_Method_CreditCard extends Customweb_BNPMercanet_Method_Default{
	
	public function getRedirectionAuthorizationFields(Customweb_BNPMercanet_Authorization_Transaction $transaction, array $formData) {
		$fields = parent::getRedirectionAuthorizationFields($transaction, $formData);
		if (strtolower($this->getPaymentMethodName()) == 'creditcard') {
			$map = $this->getPaymentInformationMap();
			$selectedBrands = $this->getPaymentMethodConfigurationValue('credit_card_brands');
			
			$mappedBrandList = array();
			foreach ($map as $key => $data) {
				foreach ($selectedBrands as $brandName) {
					if (strtolower($data['machine_name']) == strtolower($brandName) && isset($data['parameters']['brand'])) {
						$mappedBrandList[] = $data['parameters']['brand'];
					}
				}
			}
			$fields['paymentMeanBrandList'] = implode(',', $mappedBrandList);
			
		}
		return $fields;
	}
	

	
}