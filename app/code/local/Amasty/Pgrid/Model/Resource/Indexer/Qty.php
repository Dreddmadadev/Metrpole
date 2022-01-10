<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Pgrid
 */


/**
 * Class Qty.php
 *
 * @author Artem Brunevski
 */
class Amasty_Pgrid_Model_Resource_Indexer_Qty extends Mage_Index_Model_Resource_Abstract
{
    /**
     * Initialize connection and define main table
     *
     */
    protected function _construct()
    {
        $this->_init('ampgrid/qty_sold', 'product_id');
    }

    /**
     * Rebuild all index data
     * @return $this
     * @throws Exception
     */
    public function reindexAll()
    {
        $adapter = $this->_getWriteAdapter();
        $qtySoldTable = Mage::getSingleton('core/resource')->getTableName('am_pgrid_qty_sold');
        $adapter->truncateTable($qtySoldTable);
        $this->beginTransaction();
        try {
            $this->_prepareIndexTable();
            $this->commit();
        } catch (Exception $e) {
            $this->rollBack();
            throw $e;
        }
        return $this;
    }

    /**
     * @param null $table
     * @return null|string
     */
    public function getIdxTable($table = null)
    {
        if ($table) {
            return $table;
        }
        return $this->getMainTable();
    }

    /**
     * Retrieve product relations by children
     *
     * @param int|array $childIds
     * @return array
     */
    public function getRelationsByChild($childIds)
    {
        $write = $this->_getWriteAdapter();
        $select = $write->select()
            ->from($this->getTable('catalog/product_relation'), 'parent_id')
            ->where('child_id IN(?)', $childIds);

        return $write->fetchCol($select);
    }

    /**
     * @param $productIds
     * @return $this
     * @throws Exception
     */
    public function reindexProducts($productIds)
    {
        if (!is_array($productIds)) {
            $productIds = array($productIds);
        }
        $parentIds = $this->getRelationsByChild($productIds);
        if ($parentIds) {
            $processIds = array_merge($parentIds, $productIds);
        } else {
            $processIds = $productIds;
        }

        $this->beginTransaction();
        try {
            $this->_updateIndex($processIds);
            $this->commit();
        } catch (Exception $e) {
            $this->rollBack();
            throw $e;
        }
        return $this;
    }

    /**
     * @param int|array $entityIds the product limitation
     * @return $this
     */
    protected function _prepareIndexTable($entityIds = null)
    {
        $addedIds = array();
        $adapter = $this->_getWriteAdapter();
        $select = $this->_getQtySoldSelect($entityIds);
        $query = $select->insertFromSelect($this->getIdxTable());
        $productIds = $adapter->fetchAll($select);
        $adapter->query($query);

        foreach ($productIds as $productId) {
            array_push($addedIds, $productId['product_id']);
        }

        $remainedProducts = $this->_getRemainedProducts($addedIds);
        $queryRemained = $remainedProducts->insertFromSelect($this->getIdxTable());
        $adapter->query($queryRemained);

        return $this;
    }

    /**
     * Get the select object for all remained products
     *
     * @param array $entityIds
     * @return Varien_Db_Select
     */
    protected function _getRemainedProducts($entityIds = null)
    {
        $adapter = $this->_getWriteAdapter();

        $select = $adapter->select()
            ->from($this->getTable('catalog/product'), array(
                'product_id' => 'entity_id',
                'qty_sold' => new Zend_Db_Expr('0')
            ));

        if ($entityIds) {
            $select->where('entity_id NOT IN (?)', $entityIds);
        }

        return $select;
    }

    /**
     * Get the select object for get qty sold by product ids
     *
     * @param int|array $entityIds
     * @return Varien_Db_Select
     */
    protected function _getQtySoldSelect($entityIds = null)
    {
        $adapter = $this->_getWriteAdapter();

        $dateFrom = Mage::getStoreConfig('ampgrid/additional/qty_sold_from');
        $dateTo = Mage::getStoreConfig('ampgrid/additional/qty_sold_to');

        $select  = $adapter->select()
            ->from(array('e' => $this->getTable('sales/order_item')), array(
                'product_id',
                'sum(qty_ordered)-sum(qty_refunded)-sum(qty_canceled) as qty_sold'
            ))
            ->group('product_id');

        if ($dateFrom) {
            $select->where('created_at > ? ', date('Y-m-d',strtotime($dateFrom)));
        }

        if ($dateTo) {
            $select->where('created_at < ? ', date('Y-m-d',strtotime($dateTo)));
        }

        if (!is_null($entityIds)) {
            $select->where('product_id IN(?)', $entityIds);
        }

        return $select;
    }

    /**
     * Update Qty sold index by product ids
     *
     * @param array|int $entityIds
     * @return $this
     */
    protected function _updateIndex($entityIds)
    {
        $adapter = $this->_getWriteAdapter();
        $select  = $this->_getQtySoldSelect($entityIds, true);

        $query   = $adapter->query($select);

        $i      = 0;
        $data   = array();
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $i ++;
            $data[] = array(
                'product_id'    => (int)$row['product_id'],
                'qty_sold'           => (int)$row['qty_sold']
            );
            if (($i % 1000) == 0) {
                $this->_updateIndexTable($data);
                $data = array();
            }
        }
        $this->_updateIndexTable($data);

        return $this;
    }

    /**
     * Update index table (INSERT ... ON DUPLICATE KEY UPDATE ...)
     *
     * @param array $data
     * @return $this
     */
    protected function _updateIndexTable($data)
    {
        if (empty($data)) {
            return $this;
        }

        $adapter = $this->_getWriteAdapter();
        $adapter->insertOnDuplicate($this->getMainTable(), $data, array('qty_sold'));

        return $this;
    }
}