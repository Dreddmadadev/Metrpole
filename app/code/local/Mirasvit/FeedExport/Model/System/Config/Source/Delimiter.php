<?php
/**
 * Mirasvit
 *
 * This source file is subject to the Mirasvit Software License, which is available at https://mirasvit.com/license/.
 * Do not edit or add to this file if you wish to upgrade the to newer versions in the future.
 * If you wish to customize this module for your needs.
 * Please refer to http://www.magentocommerce.com for more information.
 *
 * @category  Mirasvit
 * @package   mirasvit/extension_feedexport
 * @version   1.1.24
 * @copyright Copyright (C) 2019 Mirasvit (https://mirasvit.com/)
 */


class Mirasvit_FeedExport_Model_System_Config_Source_Delimiter
{
    public function toOptionArray()
    {        
        return array(
            array(
                'label' => Mage::helper('feedexport')->__('Comma'),
                'value' => ','
            ),
            array(
                'label' => Mage::helper('feedexport')->__('Tab'),
                'value' => "tab"
            ),
            array(
                'label' => Mage::helper('feedexport')->__('Colon'),
                'value' => ':'
            ),
            array(
                'label' => Mage::helper('feedexport')->__('Space'),
                'value' => ' '
            ),
            array(
                'label' => Mage::helper('feedexport')->__('Vertical pipe'),
                'value' => '|'
            ),
            array(
                'label' => Mage::helper('feedexport')->__('Semi-colon'),
                'value' => ';'
            ),              
        );
    }
}