<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

class Adexos_Casestudy_Block_Adminhtml_Grid_Edit_Tabs extends Mage_Adminhtml_Block_Widget_Tabs
{
    public function __construct()
    {
        parent::__construct();
        $this->setId('cas_tabs');
        $this->setDestElementId('edit_form');
        $this->setTitle('Information sur l\'étude de cas');
    }

    protected function _beforeToHtml()
    {

        $this->addTab('form_section_infos', array(
            'label' => 'Informations',
            'title' => 'About the case',
            'content' => $this->getLayout()
                ->createBlock('adexos_casestudy/adminhtml_grid_edit_tab_form')
                ->toHtml()
        ));

        $this->addTab('form_section_product', array(
            'label' => 'Produits',
            'title' => 'About products',
            'content' => $this->getLayout()
                ->createBlock('adexos_casestudy/adminhtml_grid_edit_tab_formproducts')
                ->toHtml()
        ));


        return parent::_beforeToHtml();
    }

}
