<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Observer_AbstractValidate
{
    protected $_route;
    protected $_sessionClass;
    protected $_errorMessage;
    protected $_blockClass = 'amgdpr/checkbox_checkout';

    public function execute(Varien_Object $observer)
    {
        $action = $observer->getData('controller_action');
        if ($action->getRequest()->getParam('amgdpr_agree')) {
            return;
        }

        $checkboxBlock = $action->getLayout()->getBlockSingleton($this->_blockClass);
        if (!$checkboxBlock->isVisible()) {
            return;
        }

        $session = Mage::getSingleton($this->_sessionClass);
        $session->addError($this->_errorMessage);

        if ('customer/session' == $this->_sessionClass) {
            $session->setCustomerFormData($action->getRequest()->getPost());
        }

        $store = Mage::app()->getStore();
        Mage::app()->getResponse()->setRedirect($store->getUrl($this->_route))->sendResponse();
        Mage::helper('ambase/utils')->_exit();
    }
}
