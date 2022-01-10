<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Source_Location
{
    const SHOW_ON_TOP = 1;
    const SHOW_ON_FOOTER = 0;

    public function toOptionArray()
    {
        $hlp = Mage::helper('amgdpr');

        return array(
            array(
                'value' => self::SHOW_ON_FOOTER,
                'label' => $hlp->__('Footer')
            ),
            array(
                'value' => self::SHOW_ON_TOP,
                'label' => $hlp->__('Top')
            ),
        );
    }
}
