<?php
/**
 * Mirasvit
 *
 * This source file is subject to the Mirasvit Software License, which is available at https://mirasvit.com/license/.
 * Do not edit or add to this file if you wish to upgrade the to newer versions in the future.
 * If you wish to customize this module for your needs.
 * Please refer to http://www.magentocommerce.com for more information.
 *
 * @category  Mirasvit
 * @package   mirasvit/extension_feedexport
 * @version   1.1.24
 * @copyright Copyright (C) 2019 Mirasvit (https://mirasvit.com/)
 */


class Mirasvit_FeedExport_Block_Adminhtml_Dynamic_Attribute_Edit_Tab_General extends Mage_Adminhtml_Block_Widget_Form
{
    protected function _prepareForm()
    {
        $model = Mage::registry('current_model');
        $form  = new Varien_Data_Form();
        $this->setForm($form);

        $general = $form->addFieldset('general', array('legend' => Mage::helper('feedexport')->__('General Information')));

        if ($model->getId()) {
            $general->addField('attribute_id', 'hidden', array(
                'name'      => 'attribute_id',
                'value'     => $model->getId(),
            ));
        }

        $general->addField('name', 'text', array(
            'label'    => Mage::helper('feedexport')->__('Attribute Name'),
            'required' => true,
            'name'     => 'name',
            'value'    => $model->getName()
        ));

       $general->addField('code', 'text', array(
            'label'    => Mage::helper('feedexport')->__('Attribute Code'),
            'required' => true,
            'name'     => 'code',
            'value'    => $model->getCode(),
            'class'    => 'validate-code',
        ));

        return parent::_prepareForm();
    }
}
