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



class Mirasvit_FeedExport_Model_Config
{
    public function getBasePath()
    {
        $dir = Mage::getBaseDir('media').DS.'feed';
        if (!file_exists($dir)) {
            mkdir($dir);
        }

        return $dir;
    }

    public function getTmpPath($key)
    {
        return $this->getBasePath().DS.'tmp'.DS.$key;
    }

    public function getStatePath()
    {
        return $this->getBasePath().DS.'state';
    }

    public function getTemplatePath()
    {
        $dir = $this->getBasePath().DS.'template';
        if (!file_exists($dir)) {
            mkdir($dir);
        }

        return $dir;
    }

    public function getRulePath()
    {
        $dir = $this->getBasePath().DS.'rule';
        if (!file_exists($dir)) {
            mkdir($dir);
        }

        return $dir;
    }

    public function getDynamicAttributePath()
    {
        $dir = $this->getBasePath().DS.'dynamic'.DS.'attribute';
        if (!file_exists($dir)) {
            mkdir($dir, 0777, true);
        }

        return $dir;
    }

    public function getPageSize()
    {
        return intval(Mage::getStoreConfig('feedexport/generation/iteration_size'));
    }

    public function isProfilerActive()
    {
        return Mage::getStoreConfig('feedexport/generation/profiler');
    }
}
