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
 * Class Ophirah_Qquoteadv_Block_Renderers_Bundle
 */
class Ophirah_Qquoteadv_Block_Renderers_Bundle extends Ophirah_Qquoteadv_Block_Renderers_Abstract
{

    /**
     * @return bool
     */
    public function hasBundleOptions()
    {
        if ($this->getBundleOptions() && count($this->getBundleOptions())) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @return array
     */
    public function getBundleOptions()
    {
        if ($this->_productValues instanceof Varien_Object) {
            return $this->_productValues->getBundleOptions();
        } else {
            return array();
        }
    }

    /**
     * @return string
     */
    public function getPrice()
    {
        $html = "";
        if (Mage::helper('qquoteadv/not2order')->getShowPrice($this->getProduct())) {
            $block = $this->getLayout()->createBlock('bundle/catalog_product_price')->setProduct($this->getProduct());
            $block->setTemplate('bundle/catalog/product/view/price.phtml');
            $html = $block->toHtml();
        }
        return $html;
    }


}
