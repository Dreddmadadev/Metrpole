<?php

class Adexos_ProductSlider_Model_Product extends Mage_Core_Model_Abstract{

    CONST CATEG_HOME_1_NAME = "Aménagement Urbain - Home";
    CONST CATEG_HOME_1_LABEL = "Aménagement Urbain";
    CONST CATEG_HOME_2_NAME = "Signalisation - Home";
    CONST CATEG_HOME_2_LABEL = "Signalisation";
    CONST CATEG_HOME_3_NAME = "Sécurité - Home";
    CONST CATEG_HOME_3_LABEL = "Sécurité";

    public function getProductFromCategName($nameCat, $nbProduct = 4){
        $categ = Mage::getModel("catalog/category")->getCollection()
            ->addFieldToFilter("name",$nameCat)
            ->addFieldToFilter("level",2)
            ->getFirstItem();
        if($categ){
            return $categ->getProductCollection()
                ->addAttributeToSelect('*')
                ->addFieldToFilter('visibility', array('neq' => Mage_Catalog_Model_Product_Visibility::VISIBILITY_NOT_VISIBLE))
                ->setPageSize($nbProduct)
                ->setCurPage(1);
        }else{
            return null;
        }

    }

    public function getAllProductsForAllSliderHome($nbProduct = 4){

        $sliders = array();
        for($i = 0 ; $i < 3 ; $i++){

            switch ($i){
                case 0:
                    $name = self::CATEG_HOME_1_NAME;
                    $label = self::CATEG_HOME_1_LABEL;
                    break;
                case 1:
                    $name = self::CATEG_HOME_2_NAME;
                    $label = self::CATEG_HOME_2_LABEL;
                    break;
                case 2:
                    $name = self::CATEG_HOME_3_NAME;
                    $label = self::CATEG_HOME_3_LABEL;
                    break;
                default:
                    $name = "";
                        break;
            }

            $products = $this->getProductFromCategName($name, $nbProduct);
            $products = (count($products) > 0 ) ? $products : null ;
            $slider = new Varien_Object();
            $slider->setData('name', $label);
            $slider->setData('products', $products);

            array_push($sliders,$slider);

        }

        return $sliders;
    }

}