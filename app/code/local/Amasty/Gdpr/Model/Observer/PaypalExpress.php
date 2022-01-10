<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Observer_PaypalExpress extends Amasty_Gdpr_Model_Observer_AbstractValidate
{
    public function execute(Varien_Object $observer)
    {
        $this->_route = 'paypal/express/review';
        $this->_sessionClass = 'paypal/session';
        $this->_errorMessage = Mage::helper('amgdpr')->__('Please agree to all the terms and conditions before placing the order.');

        parent::execute($observer);
    }
}
