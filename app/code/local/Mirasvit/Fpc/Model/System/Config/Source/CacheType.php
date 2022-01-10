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
 * @package   mirasvit/extension_fpc
 * @version   1.0.87
 * @copyright Copyright (C) 2018 Mirasvit (https://mirasvit.com/)
 */



class Mirasvit_Fpc_Model_System_Config_Source_CacheType
{
    public function toOptionArray()
    {
        return array(
            array('value' => 'file', 'label' => __('File')),
            array('value' => 'memcache', 'label' => __('Memcache')),
            array('value' => 'apc', 'label' => __('APC')),
            array('value' => 'redis', 'label' => __('Redis')),
            array('value' => 'xcache', 'label' => __('XCache')),
        );
    }

    public function toArray()
    {
        return array(
           'file' => __('File'),
           'memcache' => __('Memcache'),
           'apc' => __('APC'),
           'redis' => __('Redis'),
           'xcache' => __('XCache'),
        );
    }
}