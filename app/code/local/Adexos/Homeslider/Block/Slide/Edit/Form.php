<?php
/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 27/02/18
 * Time: 18:51
 */
class Adexos_Homeslider_Block_Slide_Edit_Form extends Mage_Adminhtml_Block_Widget_Form
{

    protected function _getModel(){
        return Mage::registry('current_model');
    }

    protected function _getHelper(){
        return Mage::helper('adexos_homeslider');
    }

    protected function _getModelTitle(){
        return '';
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

        $fieldset->addField('title', 'text',
            array(
                'label' => 'Titre',
                'class' => 'required-entry',
                'required' => true,
                'name' => 'title',
            ));

        $fieldset->addField('content', 'text',
            array(
                'label' => 'content',
                'class' => 'required-entry',
                'required' => true,
                'name' => 'content',
            ));

        $fieldset->addField('link', 'text',
            array(
                'label' => 'Lien',
                'class' => 'required-entry',
                'required' => true,
                'name' => 'link',
            ));


        $fieldset->addField('image', 'image',
            array(
                'label' => 'Image',
                'required' => true,
                'class' => 'required-entry',
                'name' => 'iconimage',
            ));

        $fieldset->addField('disabled', 'radios', array(
            'label'     =>'Désactiver',
            'name'      => 'disabled',
            'required' => true,
            'class' => 'required-entry',
            'value'  => '0',
            'values' => array(
                array('value'=>'0','label'=>'Non'),
                array('value'=>'1','label'=>'Oui'),
            )
        ));

        $fieldset->addField('order', 'text',
            array(
                'label'    => 'Ordre',
                'class' => 'validate-number',
                'required' => true,
                'name'     => 'order',
            ));

        if ($model && $model->getId()) {
            $modelPk = $model->getResource()->getIdFieldName();
            $fieldset->addField($modelPk, 'hidden', array(
                'name' => $modelPk,
            ));
        }



        if($model){
            $form->setValues($model->getData());
        }
        $form->setUseContainer(true);
        $this->setForm($form);

        return parent::_prepareForm();
    }

}
