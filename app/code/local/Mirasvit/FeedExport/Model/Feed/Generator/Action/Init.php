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


class Mirasvit_FeedExport_Model_Feed_Generator_Action_Init extends Mirasvit_FeedExport_Model_Feed_Generator_Action
{
    public function process()
    {
        $this->start();

        $tmpPath = Mage::getSingleton('feedexport/config')->getTmpPath($this->getFeed()->getTmpPathKey());
        Mage::helper('feedexport/io')->rmdir($tmpPath, true);
        Mage::helper('feedexport/io')->mkdir($tmpPath);

        $this->finish();
    }
}