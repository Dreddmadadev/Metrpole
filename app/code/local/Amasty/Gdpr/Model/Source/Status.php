<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Source_Status extends Mage_Adminhtml_Model_System_Config_Source_Order_Status
{
    protected $_stateStatuses = array();

    protected $_orderStatuses = array();

    public function toOptionArray()
    {
        if (!$this->_orderStatuses) {
            $statuses = parent::toOptionArray();
            unset($statuses[0]);
            $this->_orderStatuses = $statuses;
        }

        return $this->_orderStatuses;
    }
}
