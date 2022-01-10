<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

class Adexos_Casestudy_Block_Adminhtml_Grid_Edit extends Mage_Adminhtml_Block_Widget_Form_Container
{

    public function __construct()
    {
        parent::__construct();
        $this->_objectId = 'id';
        $this->_blockGroup      = 'adexos_casestudy';
        $this->_controller      = 'adminhtml_grid';


        $this->_updateButton('save', 'label', 'Save');
        $this->_updateButton('delete', 'label', 'Delete');
    }


    public function getHeaderText()
    {
        if (Mage::registry('cas_data') && Mage::registry('cas_data')->getId()) {
            return 'Editer l\'étude de cas ' . $this->htmlEscape(Mage::registry('cas_data')->getTitle());
        } else {
            return 'Ajouter une étude de cas';
        }
    }
}
