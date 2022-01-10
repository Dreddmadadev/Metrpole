<?php
/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 16/03/18
 * Time: 17:22
 */ 
class Adexos_Picto_Model_Resource_Picto extends Mage_Core_Model_Resource_Db_Abstract
{

    protected function _construct()
    {
        $this->_init('adexos_picto/picto', 'picto_id');
    }

}