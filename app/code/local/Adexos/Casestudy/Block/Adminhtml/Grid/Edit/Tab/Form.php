<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

class Adexos_Casestudy_Block_Adminhtml_Grid_Edit_Tab_Form extends Mage_Adminhtml_Block_Widget_Form
{
    protected function _prepareForm()
    {
        $form = new Varien_Data_Form();
        $this->setForm($form);
        $fieldset = $form->addFieldset('cas_form',
            array('legend'=>'information'));

        $fieldset->addField('title', 'text',
            array(
                'label' => 'Titre',
                'class' => 'required-entry',
                'required' => true,
                'name' => 'title',
            ));


        /*$fieldset->addField(
            'content',
            'editor',
            array(
                'label' => 'Description',
                'name'   => 'content',
                'container_id' => 'attribute-custom0',
                'placeholder' => $this->__('Custom Attribute Field'),
                'config'    => Mage::getSingleton('cms/wysiwyg_config')->getConfig(),
                'wysiwyg'   => true,
                'required' => true,
            ));*/
        $fieldset->addField(
            'description',
            'editor',
            array(
                'label' => 'Description',
                'name'   => 'description',
                'container_id' => 'attribute-custom0',
                'placeholder' => $this->__('Custom Attribute Field'),
                'config'    => Mage::getSingleton('cms/wysiwyg_config')->getConfig(),
                'wysiwyg'   => true,
                'required' => true,
            ));


        $fieldset->addField('image', 'image',
            array(
                'label' => 'Image',
                'required' => false,
                'name' => 'iconimage',
            ));



        if ( Mage::registry('cas_data') )
        {
            $form->setValues(Mage::registry('cas_data')->getData());
        }
        else{
            var_dump( Mage::registry('cas_data'));
        }

        return parent::_prepareForm();
    }
}
