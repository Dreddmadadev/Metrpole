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

class Customweb_BNPMercanetCw_Model_Source_MiniTixCurrency
{
	public function toOptionArray()
	{
		$options = array(
			array('value' => 'EUR', 'label' => Mage::helper('adminhtml')->__("Euro (EUR)")),
			array('value' => 'USD', 'label' => Mage::helper('adminhtml')->__("United States dollar (USD)")),
			array('value' => 'CHF', 'label' => Mage::helper('adminhtml')->__("Swiss franc (CHF)")),
			array('value' => 'GBP', 'label' => Mage::helper('adminhtml')->__("Pound sterling (GBP)")),
			array('value' => 'CAD', 'label' => Mage::helper('adminhtml')->__("Canadian dollar (CAD)")),
			array('value' => 'JPY', 'label' => Mage::helper('adminhtml')->__("Japanese yen (JPY)")),
			array('value' => 'MXN', 'label' => Mage::helper('adminhtml')->__("Mexican peso (MXN)")),
			array('value' => 'TRY', 'label' => Mage::helper('adminhtml')->__("Turkish lira (TRY)")),
			array('value' => 'AUD', 'label' => Mage::helper('adminhtml')->__("Australian dollar (AUD)")),
			array('value' => 'NZD', 'label' => Mage::helper('adminhtml')->__("New Zealand dollar (NZD)")),
			array('value' => 'NOK', 'label' => Mage::helper('adminhtml')->__("Norwegian krone (NOK)")),
			array('value' => 'BRL', 'label' => Mage::helper('adminhtml')->__("Brazilian real (BRL)")),
			array('value' => 'ARS', 'label' => Mage::helper('adminhtml')->__("Argentine peso (ARS)")),
			array('value' => 'KHR', 'label' => Mage::helper('adminhtml')->__("Cambodian riel (KHR)")),
			array('value' => 'TWD', 'label' => Mage::helper('adminhtml')->__("New Taiwan dollar (TWD)")),
			array('value' => 'SEK', 'label' => Mage::helper('adminhtml')->__("Swedish krona (SEK)")),
			array('value' => 'DKK', 'label' => Mage::helper('adminhtml')->__("Danish krone (DKK)")),
			array('value' => 'KRW', 'label' => Mage::helper('adminhtml')->__("South Korean won (KRW)")),
			array('value' => 'SGD', 'label' => Mage::helper('adminhtml')->__("Singapore dollar (SGD)")),
			array('value' => 'XPF', 'label' => Mage::helper('adminhtml')->__("CFP franc (XPF)")),
			array('value' => 'XOF', 'label' => Mage::helper('adminhtml')->__("CFA franc BCEAO (XOF)"))
		);
		return $options;
	}
}
