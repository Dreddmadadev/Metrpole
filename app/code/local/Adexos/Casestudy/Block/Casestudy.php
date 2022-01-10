<?php

class Adexos_Casestudy_Block_Casestudy extends Mage_Core_Block_Template
{

    public function getCurrentproduct(){
        return Mage::registry('current_product');
    }

    public function getCasestudyByProduct($_productId)
    {
        return Mage::getModel('adexos_casestudy/casestudy')->loadByProductId($_productId);
    }

}