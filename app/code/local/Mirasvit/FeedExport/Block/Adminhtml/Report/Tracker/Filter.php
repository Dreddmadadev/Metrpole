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


class Mirasvit_FeedExport_Block_Adminhtml_Report_Tracker_Filter extends Mage_Adminhtml_Block_Widget_Form
{
    protected $_reportTypeOptions = array();
    protected $_fieldVisibility   = array();
    protected $_fieldOptions      = array();

    public function setFieldVisibility($fieldId, $visibility)
    {
        $this->_fieldVisibility[$fieldId] = (bool)$visibility;
    }

    public function getFieldVisibility($fieldId, $defaultVisibility = true)
    {
        if (!array_key_exists($fieldId, $this->_fieldVisibility)) {
            return $defaultVisibility;
        }
        return $this->_fieldVisibility[$fieldId];
    }

    public function setFieldOption($fieldId, $option, $value = null)
    {
        if (is_array($option)) {
            $options = $option;
        } else {
            $options = array($option => $value);
        }
        if (!array_key_exists($fieldId, $this->_fieldOptions)) {
            $this->_fieldOptions[$fieldId] = array();
        }
        foreach ($options as $k => $v) {
            $this->_fieldOptions[$fieldId][$k] = $v;
        }
    }

    public function addReportTypeOption($key, $value)
    {
        $this->_reportTypeOptions[$key] = $this->__($value);
        return $this;
    }

    protected function _prepareForm()
    {
        $date = Mage::getSingleton('core/date');
        $actionUrl = $this->getUrl('*/*/sales');
        $form = new Varien_Data_Form(
            array('id' => 'filter_form', 'action' => $actionUrl, 'method' => 'get')
        );

        $htmlIdPrefix = 'feed_report_';
        $form->setHtmlIdPrefix($htmlIdPrefix);
        $fieldset = $form->addFieldset('base_fieldset', array('legend' => Mage::helper('feedexport')->__('Filter')));

        $dateFormatIso = Mage::app()->getLocale()->getDateFormat(Mage_Core_Model_Locale::FORMAT_TYPE_SHORT);

        $feedValues = Mage::getModel('feedexport/feed')->getCollection()->toOptionArray(true);
        array_unshift($feedValues, array('value' => null, 'label' => Mage::helper('feedexport')->__('Show All')));
        $fieldset->addField('feed_id', 'select', array(
            'name'   => 'feed_id',
            'values' => $feedValues,
            'label'  => Mage::helper('feedexport')->__('Feed'),
            'title'  => Mage::helper('feedexport')->__('Feed')
        ));

        $fieldset->addField('period_type', 'select', array(
            'name'    => 'period_type',
            'options' => array(
                'day'   => Mage::helper('feedexport')->__('Day'),
                'month' => Mage::helper('feedexport')->__('Month'),
                'year'  => Mage::helper('feedexport')->__('Year')
            ),
            'label' => Mage::helper('feedexport')->__('Period'),
            'title' => Mage::helper('feedexport')->__('Period')
        ));

        $fieldset->addField('from', 'date', array(
            'name'      => 'from',
            'format'    => $dateFormatIso,
            'image'     => $this->getSkinUrl('images/grid-cal.gif'),
            'label'     => Mage::helper('feedexport')->__('From'),
            'title'     => Mage::helper('feedexport')->__('From'),
            'value'     => $date->gmtDate(null, $date->gmtTimestamp() - 30 * 24 * 60 * 60),
            'required'  => true
        ));

        $fieldset->addField('to', 'date', array(
            'name'      => 'to',
            'format'    => $dateFormatIso,
            'image'     => $this->getSkinUrl('images/grid-cal.gif'),
            'label'     => Mage::helper('feedexport')->__('To'),
            'title'     => Mage::helper('feedexport')->__('To'),
            'value'     => $date->gmtDate(null, $date->gmtTimestamp()),
            'required'  => true
        ));

        $fieldset->addField('show_empty_rows', 'select', array(
            'name'      => 'show_empty_rows',
            'options'   => array(
                '1' => Mage::helper('feedexport')->__('Yes'),
                '0' => Mage::helper('feedexport')->__('No')
            ),
            'label'     => Mage::helper('feedexport')->__('Empty Rows'),
            'title'     => Mage::helper('feedexport')->__('Empty Rows'),
        ));

        $form->setUseContainer(true);
        $this->setForm($form);

        return parent::_prepareForm();
    }

    protected function _initFormValues()
    {
        $data = $this->getFilterData()->getData();
        foreach ($data as $key => $value) {
            if (is_array($value) && isset($value[0])) {
                $data[$key] = explode(',', $value[0]);
            }
        }
        $this->getForm()->addValues($data);
        return parent::_initFormValues();
    }

    protected function _beforeToHtml()
    {
        $result = parent::_beforeToHtml();

        $fieldset = $this->getForm()->getElement('base_fieldset');

        if (is_object($fieldset) && $fieldset instanceof Varien_Data_Form_Element_Fieldset) {
            // apply field visibility
            foreach ($fieldset->getElements() as $field) {
                if (!$this->getFieldVisibility($field->getId())) {
                    $fieldset->removeField($field->getId());
                }
            }
            // apply field options
            foreach ($this->_fieldOptions as $fieldId => $fieldOptions) {
                $field = $fieldset->getElements()->searchById($fieldId);
                /** @var Varien_Object $field */
                if ($field) {
                    foreach ($fieldOptions as $k => $v) {
                        $field->setDataUsingMethod($k, $v);
                    }
                }
            }
        }

        return $result;
    }
}
