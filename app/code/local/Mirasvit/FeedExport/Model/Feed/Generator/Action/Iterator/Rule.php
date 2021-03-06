<?php
/**
 * Mirasvit
 *
 * This source file is subject to the Mirasvit Software License, which is available at https://mirasvit.com/license/.
 * Do not edit or add to this file if you wish to upgrade the to newer versions in the future.
 * If you wish to customize this module for your needs.
 * Please refer to http://www.magentocommerce.com for more information.
 *
 * @category  Mirasvit
 * @package   mirasvit/extension_feedexport
 * @version   1.1.24
 * @copyright Copyright (C) 2019 Mirasvit (https://mirasvit.com/)
 */



class Mirasvit_FeedExport_Model_Feed_Generator_Action_Iterator_Rule
    extends Mirasvit_FeedExport_Model_Feed_Generator_Action_Iterator_Abstract
{
    /**
     * @var null|Mirasvit_FeedExport_Model_Rule
     */
    protected $_rule = null;

    public function init()
    {
        $this->_rule = Mage::getModel('feedexport/rule')->load($this->getId())
            ->setFeed($this->getFeed());
    }

    public function getCollection()
    {
        $oldId = Mage::app()->getStore()->getId();
        Mage::app()->getStore()->setId(0);
        $collection = Mage::getResourceModel('catalog/product_collection')
                ->addStoreFilter($this->getFeed()->getStore())
                ->setStore($this->getFeed()->getStore());

        if ($this->getFeed()->getExportOnlyEnabled()) {
            $collection->addAttributeToFilter('status', Mage_Catalog_Model_Product_Status::STATUS_ENABLED);
        }

        if ($this->getIndex() > 0) {
            $rules = $this->getFeed()->getRuleIds();
            if (isset($rules[$this->getIndex() - 1])) {
                $prevIterator = $this->getFeed()->getGenerator()->getState()->getChain('iterator_rule_'.$rules[$this->getIndex() - 1]);
                $ids = $this->_rule->getResource()->getRuleProductIds($prevIterator['id']);
                $collection->addFieldToFilter('entity_id', array('in' => $ids));
            }
        }

        $this->_rule->getConditions()->collectValidatedAttributes($collection);

        Mage::app()->getStore()->setId($oldId);

        return $collection;
    }

    public function callback($row)
    {
        $product = Mage::getModel('catalog/product');
        $product->setData($row);
        $product->setProductId($product->getId());

        if ($this->_rule->getConditions()->validate($product)) {
            return $product->getId();
        }

        return;
    }

    public function save($productIds)
    {
        $this->_rule->getResource()->saveProductIds($this->_rule->getId(), $productIds);

        return $this;
    }

    public function start()
    {
        $this->_rule->getResource()->clearProductIds($this->_rule->getId());

        return $this;
    }

    public function finish()
    {
        return $this;
    }
}
