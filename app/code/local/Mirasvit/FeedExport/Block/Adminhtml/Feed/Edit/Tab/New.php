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


class Mirasvit_FeedExport_Block_Adminhtml_Feed_Edit_Tab_New extends Mage_Adminhtml_Block_Widget_Form
{
    protected function _prepareLayout()
    {
        $this->setChild('continue_button',
            $this->getLayout()->createBlock('adminhtml/widget_button')
                ->setData(array(
                    'label'   => Mage::helper('feedexport')->__('Continue'),
                    'onclick' => "saveAndContinueEdit();",
                    'class'   => 'save'
                    ))
                );
        return parent::_prepareLayout();
    }

    protected function _prepareForm()
    {
        $model = Mage::registry('current_model');
        $form  = new Varien_Data_Form();
        $form->setFieldNameSuffix('feed');
        $this->setForm($form);

        $general = $form->addFieldset('general', array('legend' => Mage::helper('feedexport')->__('Settings')));

        $general->addField('template_id', 'select', array(
            'label'    => Mage::helper('feedexport')->__('Template'),
            'required' => false,
            'name'     => 'template_id',
            'value'    => $model->getType(),
            'values'   => Mage::getSingleton('feedexport/system_config_source_template')->toOptionArray(),
        ));

        $general->addField('continue_button', 'note', array(
            'text' => $this->getChildHtml('continue_button'),
        ));

        return parent::_prepareForm();
    }
}
