<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Block_Guest extends Mage_Core_Block_Template
{
    protected $_template = 'amasty/gdpr/guest.phtml';

    public function isVisible()
    {
        return Mage::getStoreConfigFlag('amgdpr/customer_access_control/anonymize_guest');
    }

    public function getPrivacySettings()
    {
        $settings = array(
            'title' => $this->__('Anonymize personal data for this order'),
            'content' => $this->__('Anonymizing your personal data means that it will be replaced with non-personal anonymous information. After this process, your e-mail address and all other personal data conteined in this order will be anonymized.<br> <strong>Please, be aware that you will not be able to check the order details after anonymization.</strong>'),
            'hasCheckbox' => true,
            'checkboxText' => $this->__('I agree and I want to proceed'),
            'submitText' => $this->__('Proceed'),
            'action' => $this->getUrl('amgdpr/guest/anonymise'),
        );

        return $settings;
    }
}
