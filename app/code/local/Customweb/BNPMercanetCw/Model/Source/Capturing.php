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

class Customweb_BNPMercanetCw_Model_Source_Capturing
{
	public function toOptionArray()
	{
		$options = array(
			array('value' => 'disabled', 'label' => Mage::helper('adminhtml')->__("Disabled")),
			array('value' => '0', 'label' => Mage::helper('adminhtml')->__("0")),
			array('value' => '1', 'label' => Mage::helper('adminhtml')->__("1")),
			array('value' => '2', 'label' => Mage::helper('adminhtml')->__("2")),
			array('value' => '3', 'label' => Mage::helper('adminhtml')->__("3")),
			array('value' => '4', 'label' => Mage::helper('adminhtml')->__("4")),
			array('value' => '5', 'label' => Mage::helper('adminhtml')->__("5")),
			array('value' => '6', 'label' => Mage::helper('adminhtml')->__("6")),
			array('value' => '7', 'label' => Mage::helper('adminhtml')->__("7")),
			array('value' => '8', 'label' => Mage::helper('adminhtml')->__("8")),
			array('value' => '9', 'label' => Mage::helper('adminhtml')->__("9")),
			array('value' => '10', 'label' => Mage::helper('adminhtml')->__("10")),
			array('value' => '11', 'label' => Mage::helper('adminhtml')->__("11")),
			array('value' => '12', 'label' => Mage::helper('adminhtml')->__("12")),
			array('value' => '13', 'label' => Mage::helper('adminhtml')->__("13")),
			array('value' => '14', 'label' => Mage::helper('adminhtml')->__("14")),
			array('value' => '15', 'label' => Mage::helper('adminhtml')->__("15")),
			array('value' => '16', 'label' => Mage::helper('adminhtml')->__("16")),
			array('value' => '17', 'label' => Mage::helper('adminhtml')->__("17")),
			array('value' => '18', 'label' => Mage::helper('adminhtml')->__("18")),
			array('value' => '19', 'label' => Mage::helper('adminhtml')->__("19")),
			array('value' => '20', 'label' => Mage::helper('adminhtml')->__("20")),
			array('value' => '21', 'label' => Mage::helper('adminhtml')->__("21")),
			array('value' => '22', 'label' => Mage::helper('adminhtml')->__("22")),
			array('value' => '23', 'label' => Mage::helper('adminhtml')->__("23")),
			array('value' => '24', 'label' => Mage::helper('adminhtml')->__("24")),
			array('value' => '25', 'label' => Mage::helper('adminhtml')->__("25")),
			array('value' => '26', 'label' => Mage::helper('adminhtml')->__("26")),
			array('value' => '27', 'label' => Mage::helper('adminhtml')->__("27")),
			array('value' => '28', 'label' => Mage::helper('adminhtml')->__("28")),
			array('value' => '29', 'label' => Mage::helper('adminhtml')->__("29")),
			array('value' => '30', 'label' => Mage::helper('adminhtml')->__("30"))
		);
		return $options;
	}
}
