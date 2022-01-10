<?php

class Company_Feeds_Model_Map_Myfeed_Product_Configurable_Associated
    extends RocketWeb_ShoppingFeeds_Model_Map_Generic_Product_Configurable_Associated
{

    public function mapDirectiveId($params = array()) {
        $product = $this->getAdapter()->getProduct();
        $parent = $this->getAdapter()->getParentMap()->getProduct();

        $cell = $parent->getSku(). '_' . $product->getSku();

        return $this->getAdapter()->cleanField($cell, $params);
    }

}