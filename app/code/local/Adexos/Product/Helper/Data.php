<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

 
class Adexos_Product_Helper_Data extends Mage_Core_Helper_Abstract {

    private function getChildProducts($product, $checkSalable=true)
    {
        static $childrenCache = array();
        $cacheKey = $product->getId() . ':' . $checkSalable;

        if (isset($childrenCache[$cacheKey])) {
            return $childrenCache[$cacheKey];
        }

        $childProducts = $product->getTypeInstance(true)->getUsedProductCollection($product);
        $childProducts->addAttributeToSelect(array('price', 'special_price', 'status', 'special_from_date', 'special_to_date'));

        if ($checkSalable) {
            $salableChildProducts = array();
            foreach($childProducts as $childProduct) {
                if($childProduct->isSalable()) {
                    $salableChildProducts[] = $childProduct;
                }
            }
            $childProducts = $salableChildProducts;
        }

        $childrenCache[$cacheKey] = $childProducts;
        return $childProducts;
    }

    public function getChildProductWithLowestPrice($product, $priceType, $checkSalable=true)
    {
        $childProducts = $this->getChildProducts($product, $checkSalable);
        if (count($childProducts) == 0) { #If config product has no children
            return false;
        }
        $minPrice = PHP_INT_MAX;
        $minProd = false;
        foreach($childProducts as $childProduct) {
            if ($priceType == "finalPrice") {
                $thisPrice = $childProduct->getFinalPrice();
            } else {
                $thisPrice = $childProduct->getPrice();
            }
            if($thisPrice < $minPrice) {
                $minPrice = $thisPrice;
                $minProd = $childProduct;
            }
        }
        return $minProd;
    }

    function getSpecialPrice($productId) {

        $min = '';

        $pricesByAttributeValues = array();

        $product = Mage::getModel('catalog/product')->load($productId);
        if($product->isConfigurable()) {
            $attributes = $product->getTypeInstance(true)->getConfigurableAttributes($product);
            $basePrice = $product->getFinalPrice();

            foreach ($attributes as $attribute) {
                $prices = $attribute->getPrices();
                if (is_array($prices) || is_object($prices)) {
                    foreach ($prices as $price) {
                        if ($price['is_percent']) { //if the price is specified in percents
                            $pricesByAttributeValues[$price['value_index']] = (float)$price['pricing_value'] * $basePrice / 100;
                        } else { //if the price is absolute value
                            $pricesByAttributeValues[$price['value_index']] = (float)$price['pricing_value'];
                        }
                    }
                }
            }


            $simple = $product->getTypeInstance()->getUsedProducts();

            foreach ($simple as $sProduct) {
                $totalPrice = $basePrice;

                foreach ($attributes as $attribute) {

                    $value = $sProduct->getData($attribute->getProductAttribute()->getAttributeCode());
                    if (isset($pricesByAttributeValues[$value])) {
                        $totalPrice += $pricesByAttributeValues[$value];
                    }
                }

                if (!$min || $totalPrice < $min) {
                    $min = $totalPrice;
                }
            }

            return $min==$product->getPrice()?null : $min;

        }else{
            return $product->getSpecialPrice();
        }

    }
}