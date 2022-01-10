<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Observer_OSCSave
{
    public function execute(Varien_Object $observer)
    {
        /** @var Mage_Core_Controller_Varien_Action $action */
        $action = $observer->getData('controller_action');

        if (!$action->getRequest()->getParam('amgdpr_agree')) {
            return;
        }

        /** @var Mage_Customer_Model_Session $customerSession */
        $customerId = Mage::getSingleton('customer/session')->getId();

        if (!$customerId) {
            if (!method_exists($action, 'getOnepage')) {
                return;
            }
            $customerId = $action->getOnepage()->getQuote()->getCustomerId();
            if (!$customerId) {
                return;
            }
        }

        /** @var Amasty_Gdpr_Model_ConsentLog $consentLog */
        $consentLog = Mage::getModel('amgdpr/consentLog');

        $consentLog->acceptLastVersion($customerId);
    }
}
