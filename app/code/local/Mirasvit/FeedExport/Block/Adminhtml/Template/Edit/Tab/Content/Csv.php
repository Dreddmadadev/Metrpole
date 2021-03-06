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


class Mirasvit_FeedExport_Block_Adminhtml_Template_Edit_Tab_Content_Csv extends Mage_Adminhtml_Block_Widget_Form
{
    protected function _prepareForm()
    {
        $model = Mage::registry('current_model');
        $form  = new Varien_Data_Form();
        $form->setFieldNameSuffix('csv');
        $this->setForm($form);

        $general = $form->addFieldset('content', array('legend' => Mage::helper('feedexport')->__('Content Settings')));

        $general->addField('delimiter', 'select', array(
            'label'    => Mage::helper('feedexport')->__('Fields Delimiter'),
            'required' => true,
            'name'     => 'delimiter',
            'value'    => $model->getDelimiter(),
            'values'   => Mage::getSingleton('feedexport/system_config_source_delimiter')->toOptionArray(),
        ));

        $general->addField('enclosure', 'select', array(
            'label'    => Mage::helper('feedexport')->__('Fields enclosure'),
            'required' => false,
            'name'     => 'enclosure',
            'value'    => $model->getEnclosure(),
            'values'   => Mage::getSingleton('feedexport/system_config_source_enclosure')->toOptionArray(),
        ));

        $general->addField('include_header', 'select', array(
            'label'    => Mage::helper('feedexport')->__('Include Header'),
            'required' => true,
            'name'     => 'include_header',
            'value'    => $model->getIncludeHeader(),
            'values'   => Mage::getSingleton('adminhtml/system_config_source_yesno')->toOptionArray(),
        ));

        $general->addField('include_second_header', 'select', array(
            'label'    => Mage::helper('feedexport')->__('Add Second Field'),
            'required' => false,
            'name'     => 'include_second_header',
            'value'    => $model->getIncludeSecondHeader(),
            'values'   => Mage::getSingleton('adminhtml/system_config_source_yesno')->toOptionArray(),
        ));

        $general->addField('extra_header', 'textarea', array(
            'label'    => Mage::helper('feedexport')->__('Extra header'),
            'required' => false,
            'name'     => 'extra_header',
            'value'    => $model->getExtraHeader(),
            'style'    => 'height: 3em',
        ));

        $mappingFieldset = $form->addFieldset('mapping', array('legend' => Mage::helper('feedexport')->__('Fields Mapping')));

        $mapping = new Mirasvit_FeedExport_Block_Adminhtml_Template_Edit_Tab_Content_Renderer_Mapping();
        $mapping->setMapping($model->getMapping());

        $mappingFieldset->setRenderer($mapping);

        return parent::_prepareForm();
    }
}
