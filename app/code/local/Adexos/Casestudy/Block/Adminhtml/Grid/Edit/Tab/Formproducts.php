<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

class Adexos_Casestudy_Block_Adminhtml_Grid_Edit_Tab_Formproducts extends Mage_Adminhtml_Block_Widget_Form
{
    protected function _prepareForm()
    {
        $form = new Varien_Data_Form();
        $this->setForm($form);
        $fieldset = $form->addFieldset('cas_form_prod',
            array('legend'=>'Produits'));

        $fieldset->addType('product_grid', 'Adexos_Casestudy_Block_Adminhtml_Grid_Edit_Form_Renderer_Fieldset_Productgrid');

        $fieldset->addField('productgrid', 'product_grid', array(
            'label'     => Mage::helper('catalog/product')->__('Produit lié à l\'étude de cas'),
            'required'  => false,
        ));

        $fieldset->addField('product_id', 'hidden',array(
            'label'     => Mage::helper('catalog/product')->__('Produit lié à l\'étude de cas'),
            'class'     => 'required-entry',
            'required'  => true,
            'name'      => 'product_id',
            'onclick' => "",
            'onchange' => "",
            'tabindex' => 1
        ));

        if ( Mage::registry('cas_data') )
        {
            $form->setValues(Mage::registry('cas_data')->getData());
        }

        return parent::_prepareForm();
    }

}
