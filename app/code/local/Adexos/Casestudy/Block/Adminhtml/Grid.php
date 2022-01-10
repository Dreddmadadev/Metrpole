<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */


class Adexos_Casestudy_Block_Adminhtml_Grid extends Mage_Adminhtml_Block_Widget_Grid_Container {

    public function __construct()
    {
        $this->_blockGroup      = 'adexos_casestudy';
        $this->_controller      = 'adminhtml_grid';
        $this->_headerText = Mage::helper('adexos_casestudy')->__('Études de cas');
        parent::__construct();
    }

    public function getCreateUrl()
    {
        return $this->getUrl('*/*/new');
    }

}

