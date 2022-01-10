<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

 
class Adexos_Casestudy_Model_Resource_Casestudy extends Mage_Core_Model_Resource_Db_Abstract
{

    protected function _construct()
    {
        $this->_init('adexos_casestudy/adexos_casestudy', 'id');
    }

}