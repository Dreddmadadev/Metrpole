<?php

/**
 * Class Adexos_ProductSlider_Block_Product
 */

class Adexos_ProductSlider_Block_Product extends Mage_Core_Block_Template{


    /**
     * @param int $nbProduct
     *
     * @return array
     */
    public function getSlidersHome($nbProduct = 4){
        return Mage::getModel('adexos_productslider/product')->getAllProductsForAllSliderHome($nbProduct);
    }

}