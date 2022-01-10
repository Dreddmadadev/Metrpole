<?php
/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 16/03/18
 * Time: 17:26
 */
class Adexos_Picto_Block_Grid_Edit_Form extends Mage_Adminhtml_Block_Widget_Form
{

    protected function _getModel(){
        return Mage::registry('current_model');
    }

    protected function _getHelper(){
        return Mage::helper('adexos_picto');
    }

    protected function _getModelTitle(){
        return 'Picto';
    }

    protected function _prepareForm()
    {
        $model  = $this->_getModel();
        $modelTitle = $this->_getModelTitle();
        $form   = new Varien_Data_Form(array(
            'id'        => 'edit_form',
            'action'    => $this->getUrl('*/*/save'),
            'method'    => 'post',
            'enctype' => 'multipart/form-data'
        ));

        $fieldset   = $form->addFieldset('base_fieldset', array(
            'legend'    => $this->_getHelper()->__("$modelTitle Information"),
            'class'     => 'fieldset-wide',
        ));

        if ($model && $model->getId()) {
            $modelPk = $model->getResource()->getIdFieldName();
            $fieldset->addField($modelPk, 'hidden', array(
                'name' => $modelPk,
            ));
        }

        $fieldset->addField('name', 'text',
            array(
                'label' => 'Name',
                'class' => 'required-entry',
                'required' => true,
                'name' => 'name',
            ));

        $fieldset->addField('image', 'image',
            array(
                'label' => 'Image',
                'required' => true,
                'class' => 'required-entry',
                'name' => 'image',
            ));

        if($model){
            $form->setValues($model->getData());
        }
        $form->setUseContainer(true);
        $this->setForm($form);

        return parent::_prepareForm();
    }

}
