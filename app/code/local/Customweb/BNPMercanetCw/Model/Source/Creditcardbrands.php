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
 *
 * @category	Customweb
 * @package		Customweb_BNPMercanetCw
 */

class Customweb_BNPMercanetCw_Model_Source_Creditcardbrands
{
	public function toOptionArray()
	{
		$options = array(
			array('value' => 'visa', 'label' => Mage::helper('adminhtml')->__("VISA")),
			array('value' => 'mastercard', 'label' => Mage::helper('adminhtml')->__("MasterCard")),
			array('value' => 'americanexpress', 'label' => Mage::helper('adminhtml')->__("American Express")),
			array('value' => 'maestro', 'label' => Mage::helper('adminhtml')->__("Maestro")),
			array('value' => 'vpay', 'label' => Mage::helper('adminhtml')->__("V PAY")),
			array('value' => 'visaelectron', 'label' => Mage::helper('adminhtml')->__("Visa Electron")),
			array('value' => 'cartebancaire', 'label' => Mage::helper('adminhtml')->__("Carte Bancaire"))
		);
		return $options;
	}
}