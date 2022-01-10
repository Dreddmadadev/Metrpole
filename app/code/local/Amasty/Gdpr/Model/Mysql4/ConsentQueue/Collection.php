<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Mysql4_ConsentQueue_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
    protected function _construct()
    {
        $this->_init('amgdpr/consentQueue');
    }

    public function insertIds($ids)
    {
        $this->addFieldToFilter(
            'status',
            array('eq' => Amasty_Gdpr_Model_ConsentQueue::STATUS_PENDING)
        );
        if ($this->getSize() == 0) {
            Mage::getSingleton('core/resource')
                ->getConnection('core_write')
                ->truncate($this->getResource()->getMainTable());
        }

        $data = array();
        foreach ($ids as $id) {
            $data[] = array('customer_id' => $id, 'status' => Amasty_Gdpr_Model_ConsentQueue::STATUS_PENDING);
        }

        $this->getConnection()->insertOnDuplicate(
            $this->getResource()->getMainTable(),
            $data,
            array('status')
        );
    }

    public function sendEmails()
    {
        $this->addFieldToFilter('status', Amasty_Gdpr_Model_ConsentQueue::STATUS_PENDING);
        /** @var Amasty_Gdpr_Model_ConsentQueue $consentEntity */
        foreach ($this as $consentEntity) {
            $consentEntity->sendEmail();
        }
    }
}
