<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

 
class Adexos_Casestudy_Model_Casestudy extends Mage_Core_Model_Abstract
{

    protected function _construct()
    {
        $this->_init('adexos_casestudy/casestudy');
    }

    public function loadByProductId($_id){

        $idCase = Mage::getModel('adexos_casestudy/product')->getCollection()
            ->addFieldToFilter('product_id', $_id)
            ->getFirstItem()
            ->getCasestudyId();

        if(!$idCase){
            return false;
        }else{
            return Mage::getModel('adexos_casestudy/casestudy')->load($idCase);
        }

    }

}