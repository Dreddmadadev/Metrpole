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

class Customweb_BNPMercanetCw_Model_Source_Cetelemproduct
{
	public function toOptionArray()
	{
		$options = array(
			array('value' => '320', 'label' => Mage::helper('adminhtml')->__("Household other")),
			array('value' => '322', 'label' => Mage::helper('adminhtml')->__("Fridge/Freezer")),
			array('value' => '323', 'label' => Mage::helper('adminhtml')->__("Dishwasher")),
			array('value' => '324', 'label' => Mage::helper('adminhtml')->__("Washing machine")),
			array('value' => '325', 'label' => Mage::helper('adminhtml')->__("Household group")),
			array('value' => '326', 'label' => Mage::helper('adminhtml')->__("Fridge")),
			array('value' => '327', 'label' => Mage::helper('adminhtml')->__("Freezer")),
			array('value' => '328', 'label' => Mage::helper('adminhtml')->__("Stove/Cooking plate")),
			array('value' => '329', 'label' => Mage::helper('adminhtml')->__("Tumble drier")),
			array('value' => '330', 'label' => Mage::helper('adminhtml')->__("Furniture other")),
			array('value' => '331', 'label' => Mage::helper('adminhtml')->__("Living room")),
			array('value' => '332', 'label' => Mage::helper('adminhtml')->__("Dining room")),
			array('value' => '333', 'label' => Mage::helper('adminhtml')->__("Bedroom")),
			array('value' => '334', 'label' => Mage::helper('adminhtml')->__("Couch")),
			array('value' => '335', 'label' => Mage::helper('adminhtml')->__("Furniture group")),
			array('value' => '336', 'label' => Mage::helper('adminhtml')->__("Armchair")),
			array('value' => '337', 'label' => Mage::helper('adminhtml')->__("Bookshelf/Wardrobe")),
			array('value' => '338', 'label' => Mage::helper('adminhtml')->__("Bedding")),
			array('value' => '339', 'label' => Mage::helper('adminhtml')->__("Bedroom")),
			array('value' => '340', 'label' => Mage::helper('adminhtml')->__("Furnishing textiles")),
			array('value' => '341', 'label' => Mage::helper('adminhtml')->__("Office furniture")),
			array('value' => '342', 'label' => Mage::helper('adminhtml')->__("Bathroom furniture")),
			array('value' => '343', 'label' => Mage::helper('adminhtml')->__("Kitchen furniture")),
			array('value' => '610', 'label' => Mage::helper('adminhtml')->__("Video/Audio/IT")),
			array('value' => '611', 'label' => Mage::helper('adminhtml')->__("Video recorder/DVD")),
			array('value' => '613', 'label' => Mage::helper('adminhtml')->__("Audio equipment")),
			array('value' => '615', 'label' => Mage::helper('adminhtml')->__("Television")),
			array('value' => '616', 'label' => Mage::helper('adminhtml')->__("IT")),
			array('value' => '619', 'label' => Mage::helper('adminhtml')->__("Group purchase TV/Audio")),
			array('value' => '620', 'label' => Mage::helper('adminhtml')->__("Photo equipment")),
			array('value' => '621', 'label' => Mage::helper('adminhtml')->__("Phone")),
			array('value' => '622', 'label' => Mage::helper('adminhtml')->__("Home Cinema")),
			array('value' => '623', 'label' => Mage::helper('adminhtml')->__("LCD/Plasma")),
			array('value' => '624', 'label' => Mage::helper('adminhtml')->__("Video camera")),
			array('value' => '625', 'label' => Mage::helper('adminhtml')->__("Computer")),
			array('value' => '626', 'label' => Mage::helper('adminhtml')->__("Printer/Scanner")),
			array('value' => '631', 'label' => Mage::helper('adminhtml')->__("Travel holiday")),
			array('value' => '640', 'label' => Mage::helper('adminhtml')->__("Clothing")),
			array('value' => '650', 'label' => Mage::helper('adminhtml')->__("Books")),
			array('value' => '660', 'label' => Mage::helper('adminhtml')->__("Leisure other")),
			array('value' => '663', 'label' => Mage::helper('adminhtml')->__("Crafts, Gardening")),
			array('value' => '730', 'label' => Mage::helper('adminhtml')->__("Jewelry")),
			array('value' => '737', 'label' => Mage::helper('adminhtml')->__("Shutter")),
			array('value' => '738', 'label' => Mage::helper('adminhtml')->__("Mower")),
			array('value' => '739', 'label' => Mage::helper('adminhtml')->__("Tiller")),
			array('value' => '740', 'label' => Mage::helper('adminhtml')->__("Chainsaw")),
			array('value' => '741', 'label' => Mage::helper('adminhtml')->__("Brushcutter")),
			array('value' => '742', 'label' => Mage::helper('adminhtml')->__("Quad bike")),
			array('value' => '743', 'label' => Mage::helper('adminhtml')->__("Garden furniture")),
			array('value' => '744', 'label' => Mage::helper('adminhtml')->__("Barbecue")),
			array('value' => '855', 'label' => Mage::helper('adminhtml')->__("Piano")),
			array('value' => '857', 'label' => Mage::helper('adminhtml')->__("Organ")),
			array('value' => '858', 'label' => Mage::helper('adminhtml')->__("Music other"))
		);
		return $options;
	}
}
