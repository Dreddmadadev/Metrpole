<?php
/**
 *
 * CART2QUOTE CONFIDENTIAL
 * __________________
 *
 *  [2009] - [2019] Cart2Quote B.V.
 *  All Rights Reserved.
 *
 * NOTICE OF LICENSE
 *
 * All information contained herein is, and remains
 * the property of Cart2Quote B.V. and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Cart2Quote B.V.
 * and its suppliers and may be covered by European and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Cart2Quote B.V.
 *
 * @category    Ophirah
 * @package     Qquoteadv
 * @copyright   Copyright (c) 2019 Cart2Quote B.V. (https://www.cart2quote.com)
 * @license     https://www.cart2quote.com/ordering-licenses(https://www.cart2quote.com)
 */

/**
 * Class Ophirah_Qquoteadv_Block_Renderers_Configurable
 */
class Ophirah_Qquoteadv_Block_Renderers_Configurable extends Ophirah_Qquoteadv_Block_Renderers_Abstract
{
    /**
     * @return bool
     */
    public function hasAttributeInfo()
    {
        if ($this->getAttributeInfo() && count($this->getAttributeInfo())) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @return array
     */
    public function getAttributeInfo()
    {
        if ($this->_productValues instanceof Varien_Object) {
            return $this->_productValues->getAttributesInfo();
        } else {
            return array();
        }
    }

    /**
     * Get the image of the set product.
     * @param int $size
     * @return Mage_Catalog_Helper_Image
     */
    public function getImage($size = 180)
    {
        $product = $this->getChildProduct();
        if (!Mage::helper('qquoteadv/catalog_product_data')->canShowImageOfChildProduct($product)) {
            $product = $this->getProduct();
        }

        return $this->getProductImage($size, $product);
    }

    /**
     * Get item configurable child product
     *
     * @return Mage_Catalog_Model_Product
     */
    public function getChildProduct()
    {
        $item = $this->getItem();
        if ($item && $item->getProductId()) {
            return Mage::getModel('catalog/product')->load($item->getProductId());
        }

        return $this->getProduct();
    }

    /**
     * Get quote item
     *
     * @return Mage_Sales_Model_Quote_Item
     */
    public function getItem()
    {
        return $this->_addProductResult;
    }
}
