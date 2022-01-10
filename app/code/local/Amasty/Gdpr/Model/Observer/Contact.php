<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Observer_Contact extends Amasty_Gdpr_Model_Observer_AbstractConsentValidator
{
    public function execute(Varien_Object $observer)
    {
        $action = $observer->getData('controller_action');

        if (!$action->getRequest()->getParam('amgdpr_agree')) {
            return;
        }

        $this->cofirmConcent();
    }
}
