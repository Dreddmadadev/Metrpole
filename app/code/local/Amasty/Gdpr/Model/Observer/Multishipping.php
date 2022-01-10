<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Observer_Multishipping extends Amasty_Gdpr_Model_Observer_AbstractValidate
{
    public function execute(Varien_Object $observer)
    {
        $this->_route = 'checkout/multishipping/billing';
        $this->_sessionClass = 'checkout/session';
        $this->_errorMessage = Mage::helper('amgdpr')->__('Please agree to all the terms and conditions before placing the order.');

        parent::execute($observer);
    }
}
