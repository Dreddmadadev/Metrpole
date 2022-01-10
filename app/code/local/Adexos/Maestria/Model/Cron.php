<?php
/**
 * This file is part of the Adexos_Maestria Magento module.
 * (c) Adexos <contact@adexos.fr>
 */

/**
 * Class Adexos_Maestria_Model_Cron
 */
class Adexos_Maestria_Model_Cron
{
    /**
     * Delete old report events.
     */
    public function cleanReports()
    {
        $nbDays = Mage::getStoreConfig('adexos_maestria_config/logs/nb_days');

        $resource = Mage::getSingleton('core/resource');
        $write = $resource->getConnection('core_write');

        $limiteDate = new DateTime();
        $limiteDate = $limiteDate->sub(new DateInterval('P' . $nbDays . 'D'));

        $limiteDate = $write->quoteInto('(?)', $limiteDate->format('Y-m-d H:i:s'));

        $write->delete($resource->getTableName('reports/event'),"logged_at < $limiteDate");
    }
}
