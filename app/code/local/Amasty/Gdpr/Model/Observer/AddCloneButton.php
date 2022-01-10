<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Observer_AddCloneButton
{
    public function execute(Varien_Object $observer)
    {
        $container = $observer->getBlock();
        if ($container
            && $container->getType() == 'amgdpr/adminhtml_policy_edit'
            && Mage::registry('current_policy')->getStatus() != Amasty_Gdpr_Model_PrivacyPolicy::STATUS_DRAFT
        ) {
            $cloneUrl = Mage::helper('adminhtml')->getUrl(
                'adminhtml/amgdpr_policy/clone',
                array('id' => $container->getRequest()->getParam('id'))
            );
            $data = array(
                'label'   => 'Clone',
                'class'   => 'clone',
                'onclick' => 'setLocation(\'' . $cloneUrl . '\')',
            );
            if (Mage::registry('current_policy')->getStatus() == Amasty_Gdpr_Model_PrivacyPolicy::STATUS_ENABLED) {
                $container->removeButton('save')->removeButton('delete')->removeButton('reset');
            }
            $container->addButton('amgdpr_clone_button', $data);
        }

        return $this;
    }
}
