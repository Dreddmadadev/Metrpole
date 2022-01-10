<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Block_Checkbox_Contact extends Amasty_Gdpr_Block_Checkbox
{
    protected $_template = 'amasty/gdpr/checkbox/contact.phtml';

    protected function isEnabledInSettings()
    {
        return Mage::getStoreConfigFlag('amgdpr/privacy_checkbox/display_at_contact');
    }
}
