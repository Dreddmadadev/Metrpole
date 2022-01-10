<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Block_Cookie extends Mage_Core_Block_Template
{
    const IS_USER_ALLOWED_SAVE_COOKIE = 'amgdpr_allow_cookies';
    const DISALLOW = 'disallow';
    const ALLOW = 'allow';
    const BACKGROUND_BAR_COLOR = 'amgdpr/cookie_bar_customisation/background_color';
    const TEXT_BAR_COLOR = 'amgdpr/cookie_bar_customisation/text_color';
    const LINK_BAR_COLOR = 'amgdpr/cookie_bar_customisation/link_color';
    const BUTTONS_BAR_COLOR = 'amgdpr/cookie_bar_customisation/buttons_color';
    const BUTTONS_TEXT_BAR_COLOR = 'amgdpr/cookie_bar_customisation/buttons_text_color';
    const BAR_DISPLAY_POSITION = 'amgdpr/cookie_bar_customisation/display_up';
    const XML_PATH_COOKIE_RESTRICTION_LIFETIME = 'web/cookie/cookie_restriction_lifetime';

    protected $_cookieText = '';

    public function getText()
    {
        if (!$this->_cookieText) {
            switch ($this->getBarType()){
                case Amasty_Gdpr_Model_Source_Cookie::GDPR_COOKIE_DISABLED:
                    $this->_cookieText = '';
                    break;
                case Amasty_Gdpr_Model_Source_Cookie::GDPR_COOKIE_NOTIFICATION:
                    $this->_cookieText = Mage::getStoreConfig('amgdpr/cookie_policy/notification_text');
                    break;
                case Amasty_Gdpr_Model_Source_Cookie::GDPR_COOKIE_CONFIRMATION:
                    $this->_cookieText = Mage::getStoreConfig('amgdpr/cookie_policy/confirmation_text');
                    break;
            }
        }

        return $this->_cookieText;
    }

    public function getNeedShowBlock()
    {
        return (!Mage::getSingleton('core/cookie')->get(self::IS_USER_ALLOWED_SAVE_COOKIE)
                && $this->getBarType() != Amasty_Gdpr_Model_Source_Cookie::GDPR_COOKIE_DISABLED);
    }

    public function getBarType()
    {
        return Mage::getStoreConfig('amgdpr/cookie_policy/enabled');
    }

    public function getBackgroundBarColor()
    {
        return Mage::getStoreConfig(self::BACKGROUND_BAR_COLOR);
    }

    public function getTextBarColor()
    {
        return Mage::getStoreConfig(self::TEXT_BAR_COLOR);
    }

    public function getLinkBarColor()
    {
        return Mage::getStoreConfig(self::LINK_BAR_COLOR);
    }

    public function getButtonsBarColor()
    {
        return Mage::getStoreConfig(self::BUTTONS_BAR_COLOR);
    }

    public function getButtonsTextBarColor()
    {
        return Mage::getStoreConfig(self::BUTTONS_TEXT_BAR_COLOR);
    }

    public function getBarDisplayPosition()
    {
        return Mage::getStoreConfig(self::BAR_DISPLAY_POSITION);
    }

    public function getCookieRestrictionLifetime()
    {
        $restrictionLifetime = Mage::getStoreConfig(self::XML_PATH_COOKIE_RESTRICTION_LIFETIME);

        return $restrictionLifetime ? $restrictionLifetime : 31536000;
    }
}
