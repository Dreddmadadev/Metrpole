<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


abstract class Amasty_Gdpr_Model_Observer_AbstractConsentValidator
{
    protected function cofirmConcent() {
        /** @var Mage_Customer_Model_Session $customerSession */
        $customerId = Mage::getSingleton('customer/session')->getCustomerId();

        if (!$customerId) {
            return;
        }

        /** @var Amasty_Gdpr_Model_ConsentLog $consentLog */
        $consentLog = Mage::getModel('amgdpr/consentLog');

        $consentLog->acceptLastVersion($customerId);
    }
}
