<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_DeleteRequest_Notifier
{
    /**
     * @param $customerId
     * @param $comment
     * @throws Mage_Core_Exception
     * @throws Varien_Exception
     */
    public function notify($customerId, $comment)
    {
        /** @var Mage_Customer_Model_Customer $customer */
        $customer = Mage::getModel('customer/customer');

        $customer->load($customerId);

        /** @var Mage_Core_Model_Email_Template $email */
        $email = Mage::getModel('core/email_template');
        $sender = Mage::getStoreConfig('amgdpr/deletion_notification/deny_from');
        $replyTo = Mage::getStoreConfig('amgdpr/deletion_notification/deny_reply_to');
        if (!trim($replyTo)) {
            $replyTo = Mage::getStoreConfig('trans_email/ident_' . $sender . '/email');
        }
        $email->setReplyTo($replyTo);
        $email->sendTransactional(
            Mage::getStoreConfig('amgdpr/deletion_notification/deny_template'),
            $sender,
            $customer->getEmail(),
            $customer->getName(),
            array(
                'comment' => $comment,
                'customer' => $customer
            ),
            $customer->getStore()->getId()
        );
    }
}
