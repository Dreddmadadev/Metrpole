<?php

/**
 * Class Metropole_Category_Helper_Data
 */
class Metropole_Category_Helper_Data extends Mage_Core_Helper_Abstract
{
    /**
     * @param Mage_Catalog_Model_Product $product
     * @param int $size
     * @return mixed
     */
    public function getProductImage($product, $size = 266)
    {
        return Mage::helper('catalog/image')->init($product, 'small_image')->resize($size);
    }

    /**
     * Get Children innovation collection by parent category
     *
     * @return array
     */
    public function getChildrenCategoryInnovationCollection()
    {
        $subCategName = Mage::getModel('core/variable')->loadByCode('innovation-custom')->getValue('plain');
        if (empty($subCategName)) {

            return [];
        }

        $subCategData = Mage::getResourceModel('catalog/category_collection')
            ->addFieldToFilter('name', $subCategName)->getFirstItem();

        if (empty($subCategData) && !is_array($subCategData)) {

            return [];
        }

        $collections = Mage::getResourceModel('catalog/category_collection')
            ->addFieldToFilter('entity_id', array('in' => explode(',', $subCategData->getChildren())))
            ->addFieldToFilter('is_active', 1)
            ->addAttributeToSelect('*');

        return $collections;
    }

    /**
     * Get all infos category product collection
     *
     * @param Mage_Catalog_Model_Category $category
     * @return mixed
     */
    public function getCategoryProductCollection($category)
    {
        return $category->getProductCollection()->addAttributeToSelect('*');
    }
}