<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_ConsentLog extends Mage_Core_Model_Abstract
{
    protected function _construct()
    {
        $this->_init('amgdpr/consentLog');
    }

    /**
     * @return Mage_Core_Model_Abstract
     * @throws Varien_Exception
     */
    protected function _beforeSave()
    {
        if (!$this->getData('date_consented')) {
            $this->setData(
                'date_consented',
                Mage::getSingleton('core/date')->gmtDate()
            );
        }

        return parent::_beforeSave();
    }

    public function acceptLastVersion($customerId, $policyVersion = null)
    {
        $consentLog = Mage::getModel('amgdpr/consentLog');

        if ($policyVersion === null) {
            $activePolicy = Mage::getModel('amgdpr/privacyPolicy')
                ->getCurrentPolicy()
                ->getData('policy_version');
            $activeCustomer = $this->getActiveCustomer($customerId);
        } else {
            $activePolicy = $policyVersion;
            $activeCustomer = $this->getActiveCustomer($customerId, $policyVersion);
        }
        if ($activeCustomer) {
            return false;
        }

        $consentLog
            ->setData(array(
                'customer_id' => $customerId,
                'policy_version' => $activePolicy
            ))
            ->save();

        Mage::getSingleton('amgdpr/actionLog')->logAction('consent_given', $customerId);
    }

    public function getActiveCustomer($customerId, $policyVersion = null)
    {
        $activePolicy = Mage::getModel('amgdpr/privacyPolicy')
            ->getCurrentPolicy()
            ->getData('policy_version');

        if ($policyVersion === null) {
            $activeCustomer = Mage::getResourceModel('amgdpr/consentLog_collection')
                ->addFieldToFilter('customer_id', $customerId)
                ->addFieldToFilter('policy_version', $activePolicy)
                ->getData();
        } else {
            $activeCustomer = Mage::getResourceModel('amgdpr/consentLog_collection')
                ->addFieldToFilter('customer_id', $customerId)
                ->addFieldToFilter('policy_version', $policyVersion)
                ->getData();
        }

        return $activeCustomer;
    }
}
