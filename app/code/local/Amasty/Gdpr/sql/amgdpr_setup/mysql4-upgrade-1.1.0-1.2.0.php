<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


$privacyPolicyCollection = Mage::getResourceModel('amgdpr/privacyPolicy_collection');
if (!$privacyPolicyCollection->getSize()) {
    try {
        $privacyPolicy = Mage::getModel('amgdpr/privacyPolicy')
            ->setPolicyVersion('v1.0')
            ->setContent('This is the privacy policy sample page.
<br>It was created automatically and do not substitute the one you need to create and provide to your store visitors. 
<br>Please, replace this text with the correct privacy policy by visiting the Customers > GDPR > Privacy Policy section in the backend.')
            ->setComment('Automatically generated during installation')
            ->setStatus(Amasty_Gdpr_Model_PrivacyPolicy::STATUS_ENABLED)
            ->save();
    } catch (Exception $e) {
        Mage::log($e->getMessage(), null, 'Amasty_Gdpr.log', true);
    }
}

$version = Mage::helper('amgdpr')->getEeMageVersion('1.8.1.0');
if (version_compare(Mage::getVersion(), $version, '>=')) {
    $cookieBlockIdentifier = Mage::helper('core/cookie')->getCookieRestrictionNoticeCmsBlockIdentifier();
    $cookieBlock = Mage::getModel('cms/block')->load($cookieBlockIdentifier, 'identifier');
    if (!$cookieBlock->getId()) {
        try {
            $cookieBlockData = array(
                'title' => 'Cookie Notice Block',
                'identifier' => $cookieBlockIdentifier,
                'is_active' => 1,
                'content' => '<p>Cookie Notice Block</p>',
                'stores' => array(0)
            );
            $cookieBlock
                ->setData($cookieBlockData)
                ->save();
        } catch (Exception $e) {
            Mage::log($e->getMessage(), null, 'Amasty_Gdpr.log', true);
        }
    }
}
