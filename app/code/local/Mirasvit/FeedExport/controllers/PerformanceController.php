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


class Mirasvit_FeedExport_PerformanceController extends Mage_Core_Controller_Front_Action
{
    public function clickAction()
    {
        try {
            $click = Mage::getModel('feedexport/performance_click');
            $click->setFeedId($this->getRequest()->getParam('feed'))
                ->setSessionId($this->getRequest()->getParam('session'))
                ->setProductId($this->getRequest()->getParam('product'))
                ->setStoreId(Mage::app()->getStore()->getStoreId())
                ->save();
        } catch (Exception $e) {}
    }
}