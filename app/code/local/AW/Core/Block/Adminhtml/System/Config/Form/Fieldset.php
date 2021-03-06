<?php
/**
 * aheadWorks Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://ecommerce.aheadworks.com/AW-LICENSE.txt
 *
 * =================================================================
 *                 MAGENTO EDITION USAGE NOTICE
 * =================================================================
 * This software is designed to work with Magento community edition and
 * its use on an edition other than specified is prohibited. aheadWorks does not
 * provide extension support in case of incorrect edition use.
 * =================================================================
 *
 * @category   AW
 * @package    AW_Advancednewsletter
 * @version    2.5.1
 * @copyright  Copyright (c) 2010-2012 aheadWorks Co. (http://www.aheadworks.com)
 * @license    http://ecommerce.aheadworks.com/AW-LICENSE.txt
 */

class AW_Core_Block_Adminhtml_System_Config_Form_Fieldset extends Mage_Adminhtml_Block_System_Config_Form_Fieldset {

    /**
     * Render fieldset html
     * @param Varien_Data_Form_Element_Abstract $element
     * @return string
     */
    public function render(Varien_Data_Form_Element_Abstract $element) {
	$html = $this->_getHeaderHtml($element);

	foreach ($element->getElements() as $field) {
	    $html.= $field->toHtml();
	}
	$html .= "<tr>
			<td class=\"label\"></td>
			<td class=\"value\">
			<button class=\"scalable\" onclick=\"window.location='".Mage::getSingleton('adminhtml/url')->getUrl('adminhtml/awcore_viewlog/index')."'\" type=\"button\">
				<span>View log</span>
			</button
			</td>
		 </tr>
		 ";
	$html .= $this->_getFooterHtml($element);

	return $html;
    }
}