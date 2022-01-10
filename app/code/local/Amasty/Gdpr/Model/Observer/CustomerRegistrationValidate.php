<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Observer_CustomerRegistrationValidate extends Amasty_Gdpr_Model_Observer_AbstractValidate
{
    public function execute(Varien_Object $observer)
    {
        $this->_route = 'customer/account/create';
        $this->_sessionClass = 'customer/session';
        $this->_errorMessage = Mage::helper('amgdpr')->__('Please agree to the privacy policy before creating the account.');
        $this->_blockClass = 'amgdpr/checkbox_customer';

        parent::execute($observer);
    }
}
