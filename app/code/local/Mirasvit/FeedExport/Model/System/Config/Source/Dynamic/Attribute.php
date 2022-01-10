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



class Mirasvit_FeedExport_Model_System_Config_Source_Dynamic_Attribute
{
    public function toOptionArray($filesystem = false)
    {
        $result = array();

        if ($filesystem) {
            $path = Mage::getSingleton('feedexport/config')->getDynamicAttributePath();
            if ($handle = opendir($path)) {
                while (false !== ($entry = readdir($handle))) {
                    if (substr($entry, 0, 1) != '.') {
                        $result[] = array(
                            'label' => $entry,
                            'value' => $path.DS.$entry,
                        );
                    }
                }
                closedir($handle);
            }
        } else {
            $collection = Mage::getModel('feedexport/dynamic_attribute')->getCollection();
            $result[] = array('label' => 'Empty Dynamic Attribute', 'value' => '');
            foreach ($collection as $dynamicAttribute) {
                $result[] = array(
                    'label' => $dynamicAttribute->getName().' ('.$dynamicAttribute->getType().')',
                    'value' => $dynamicAttribute->getId(),
                );
            }
        }
        sort($result);

        return $result;
    }
}
