<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

class Adexos_Casestudy_Block_Adminhtml_Grid_Edit_Form_Renderer_Fieldset_Productgrid extends Varien_Data_Form_Element_Abstract{
    protected $_element;

    public function getElementHtml()
    {
        return Mage::helper('core')->getLayout()->createBlock('adexos_casestudy/adminhtml_grid_edit_form_renderer_fieldset_product_grid')->toHtml();
    }
}