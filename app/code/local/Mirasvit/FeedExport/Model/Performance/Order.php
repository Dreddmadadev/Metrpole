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


class Mirasvit_FeedExport_Model_Performance_Order extends Mage_Core_Model_Abstract
{
    protected function _construct()
    {
        $this->_init('feedexport/performance_order');
    }

    public function onOrderPlaceAfter($observer)
    {
        if (isset($_COOKIE['feedexport']) && isset($_COOKIE['feedexport_fee'])) {
            $sessionId = $_COOKIE['feedexport'];
            $feedId    = $_COOKIE['feedexport_fee'];

            $order = $observer->getOrder();
            foreach ($order->getItemsCollection() as $item) {
                try {
                    $orderTracker = Mage::getModel('feedexport/performance_order');
                    $orderTracker->setFeedId($feedId)
                        ->setOrderId($order->getId())
                        ->setSessionId($sessionId)
                        ->setProductId($item->getProductId())
                        ->setPrice($item->getPrice())
                        ->save();
                } catch (Exception $e) {
                }
            }
        }
    }
}