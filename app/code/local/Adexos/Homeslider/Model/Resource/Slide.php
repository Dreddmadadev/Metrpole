<?php
/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 27/02/18
 * Time: 18:47
 */ 
class Adexos_Homeslider_Model_Resource_Slide extends Mage_Core_Model_Resource_Db_Abstract
{

    protected function _construct()
    {
        $this->_init('adexos_homeslider/slider', 'slider_id');
    }

}