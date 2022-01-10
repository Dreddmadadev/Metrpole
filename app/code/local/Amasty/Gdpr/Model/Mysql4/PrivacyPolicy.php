<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Mysql4_PrivacyPolicy extends Mage_Core_Model_Mysql4_Abstract
{
    protected function _construct()
    {
        $this->_init('amgdpr/privacyPolicy', 'id');
    }

    protected function _beforeSave(Mage_Core_Model_Abstract $object)
    {
        if ($object->getData('status') == Amasty_Gdpr_Model_PrivacyPolicy::STATUS_ENABLED) {
            $this->disableAllPolicies();
        }

        return parent::_beforeSave($object);
    }

    public function disableAllPolicies()
    {
        $this->getReadConnection()->update(
            $this->getMainTable(),
            array('status' => Amasty_Gdpr_Model_PrivacyPolicy::STATUS_DISABLED),
            array('status = ?' => Amasty_Gdpr_Model_PrivacyPolicy::STATUS_ENABLED)
        );
    }
}
