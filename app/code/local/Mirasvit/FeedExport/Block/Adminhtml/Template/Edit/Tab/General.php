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


class Mirasvit_FeedExport_Block_Adminhtml_Template_Edit_Tab_General extends Mage_Adminhtml_Block_Widget_Form
{
    protected function _prepareForm()
    {
        $model = Mage::registry('current_model');
        $form  = new Varien_Data_Form();
        $this->setForm($form);

        $general = $form->addFieldset('general', array('legend' => Mage::helper('feedexport')->__('General Information')));

        if ($model->getId()) {
            $general->addField('template_id', 'hidden', array(
                'name'      => 'template_id',
                'value'     => $model->getId(),
            ));
        }

        $general->addField('name', 'text', array(
            'label'    => Mage::helper('feedexport')->__('Name'),
            'required' => true,
            'name'     => 'name',
            'value'    => $model->getName()
        ));

        $general->addField('type', 'select', array(
            'label'    => Mage::helper('feedexport')->__('File Type'),
            'required' => true,
            'name'     => 'type',
            'value'    => $model->getType(),
            'values'   => Mage::getSingleton('feedexport/system_config_source_type')->toOptionArray(),
            'onchange' => "FeedExportMapping.changeFormat(this);",
            'disabled' => $model->getName() ? true : false,
        ));

        return parent::_prepareForm();
    }
}
