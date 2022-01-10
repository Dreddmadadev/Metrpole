<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Observer_Cookie
{
    /**
     * @param Varien_Object $observer
     * @throws Varien_Exception
     */
    public function execute(Varien_Object $observer)
    {
        if (Amasty_Gdpr_Model_Source_Cookie::GDPR_COOKIE_CONFIRMATION == Mage::getStoreConfig('amgdpr/cookie_policy/enabled')
            && Amasty_Gdpr_Block_Cookie::DISALLOW == Mage::getSingleton('core/cookie')->get(Amasty_Gdpr_Block_Cookie::IS_USER_ALLOWED_SAVE_COOKIE)
        ) {
            $cookies = trim(Mage::getStoreConfig('amgdpr/cookie_policy/confirmation_cookies'));
            $cookiesToExclude = preg_split('|\s*[\r\n]+\s*|', $cookies, -1, PREG_SPLIT_NO_EMPTY);
            $cookies = Mage::getSingleton('core/cookie')->get();
            foreach ($cookiesToExclude as $key => $exclude) {
                if (array_key_exists($exclude, $cookies)) {
                    Mage::getSingleton('core/cookie')->delete($exclude);
                }
            }
        }
    }
}
