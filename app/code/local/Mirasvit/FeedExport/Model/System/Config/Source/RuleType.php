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


class Mirasvit_FeedExport_Model_System_Config_Source_RuleType
{ 
    public function toOptionArray()
    {        
       return array(
            array(
                'label' => Mage::helper('feedexport')->__('Product Filter'),
                'value' => Mirasvit_FeedExport_Model_Rule::TYPE_ATTRIBUTE
            ),
            array(
                'label' => Mage::helper('feedexport')->__('Performance Filter'),
                'value' => Mirasvit_FeedExport_Model_Rule::TYPE_PERFORMANCE
            ),
        );
    }


    public function toOptions()
    {
        $options = array();

        foreach ($this->toOptionArray() as $item) {
            $options[$item['value']] = $item['label'];
        }

        return $options;
    }
}