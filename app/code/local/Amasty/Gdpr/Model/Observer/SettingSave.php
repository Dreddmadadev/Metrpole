<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Observer_SettingSave
{
    protected $_messages = array(
        'no_policy' => 'No policies enabled, please, create or enable one <a href="%s">here</a>',
        'default_policy_only' => 'The privacy policy sample has been generated automatically. Please, proceed to <a href="%s">the policy grid</a> and specify your privacy policy text'
    );

    public function execute(Varien_Event_Observer $observer)
    {
        if ('amgdpr' == $observer->getObject()->getSection()) {
            $settings = $observer->getObject()->getData();
            if (isset($settings['groups']['cookie_policy']['fields']['enabled']['value'])) {
                $version = Mage::helper('amgdpr')->getEeMageVersion('1.7.0.0');
                if (version_compare(Mage::getVersion(), $version, '>=')) {
                    if (Amasty_Gdpr_Model_Source_Cookie::GDPR_COOKIE_DISABLED != $settings['groups']['cookie_policy']['fields']['enabled']['value']) {
                        Mage::getConfig()->saveConfig('web/cookie/cookie_restriction', 0);
                    } else {
                        Mage::getConfig()->saveConfig('web/cookie/cookie_restriction', $settings['groups']['cookie_policy']['fields']['enabled']['value']);
                    }
                } else {
                    $settings['groups']['cookie_policy']['fields']['enabled']['value'] = Amasty_Gdpr_Model_Source_Cookie::GDPR_COOKIE_DISABLED;
                    $observer->getObject()->setData($settings);
                    $message = Mage::helper('amgdpr')->__('The Cookie Policy Bar is available only from Magento %s', $version);
                    Mage::getSingleton('adminhtml/session')->addError($message);
                }
            }

            $privacyPolicyCollection = Mage::getResourceModel('amgdpr/privacyPolicy_collection')->addFieldToFilter('status', Amasty_Gdpr_Model_PrivacyPolicy::STATUS_ENABLED);
            if (0 < $privacyPolicyCollection->getSize()) {
                foreach ($privacyPolicyCollection as $privacyPolicy) {
                    if (is_null($privacyPolicy->getLastEditedBy())) {
                        $this->_addPolicyNotice('default_policy_only');
                    }
                }
            } else {
                $this->_addPolicyNotice('no_policy');
            }
        }

        if ('web' == $observer->getObject()->getSection()) {
            $settings = $observer->getObject()->getData();
            if (isset($settings['groups']['cookie']['fields']['cookie_restriction']['value'])) {
                if (Amasty_Gdpr_Model_Source_Cookie::GDPR_COOKIE_CONFIRMATION != Mage::getStoreConfig('amgdpr/cookie_policy/enabled')) {
                    Mage::getConfig()->saveConfig('amgdpr/cookie_policy/enabled', $settings['groups']['cookie']['fields']['cookie_restriction']['value']);
                } else {
                    $settings['groups']['cookie']['fields']['cookie_restriction']['value'] = 0;
                    $observer->getObject()->setData($settings);
                    $message = Mage::helper('amgdpr')->__('Can not enable Cookie Restriction Mode here, please control it via the Amasty GDPR extension.');
                    Mage::getSingleton('adminhtml/session')->addError($message);
                }
            }
        }
    }

    protected function _addPolicyNotice($noticeCode)
    {
        $policyGridUrl = Mage::helper('adminhtml')->getUrl('adminhtml/amgdpr_policy');
        $message = Mage::helper('amgdpr')->__($this->_messages[$noticeCode], $policyGridUrl);
        Mage::getSingleton('adminhtml/session')->addNotice($message);
    }
}
