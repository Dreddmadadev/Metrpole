<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Source_Cookie
{
    const GDPR_COOKIE_DISABLED = 0;
    const GDPR_COOKIE_NOTIFICATION = 1;
    const GDPR_COOKIE_CONFIRMATION = 2;

    public function toOptionArray()
    {
        $hlp = Mage::helper('amgdpr');

        return array(
            array(
                'value' => self::GDPR_COOKIE_DISABLED,
                'label' => $hlp->__('No')
            ),
            array(
                'value' => self::GDPR_COOKIE_NOTIFICATION,
                'label' => $hlp->__('Notification Bar')
            ),
            array(
                'value' => self::GDPR_COOKIE_CONFIRMATION,
                'label' => $hlp->__('Confirmation Bar')
            ),
        );
    }
}
