<?php
 /**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Pgrid
 */

class Amasty_Pgrid_Model_Mysql4_Column extends Mage_Core_Model_Mysql4_Abstract
{
    public function _construct()
    {
        $this->_init('ampgrid/grid_column', 'entity_id');
    }
}