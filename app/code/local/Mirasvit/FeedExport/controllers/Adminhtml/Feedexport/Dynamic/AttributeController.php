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



class Mirasvit_FeedExport_Adminhtml_Feedexport_Dynamic_AttributeController extends Mage_Adminhtml_Controller_Action
{
    protected function _initAction()
    {
        $this->loadLayout()
            ->_setActiveMenu('catalog')
            ->_title(Mage::helper('feedexport')->__('Feed Export'))
            ->_title(Mage::helper('feedexport')->__('Dynamic Attributes'));

        return $this;
    }

    public function indexAction()
    {
        $this->_initAction();
        $this->_addContent($this->getLayout()->createBlock('feedexport/adminhtml_dynamic_attribute'));
        $this->renderLayout();
    }

    public function newAction()
    {
        $this->_forward('edit');
    }

    public function editAction()
    {
        $id = $this->getRequest()->getParam('id');
        $model = $this->_initModel();

        if ($id && !$model->getId()) {
            Mage::getSingleton('adminhtml/session')->addError(Mage::helper('feedexport')->__('This item not exists.'));
            $this->_redirect('*/*/');

            return;
        }

        $this->_title($id ? $model->getName() : Mage::helper('feedexport')->__('New Attribute'));
        $this->_initAction();

        $this->_addContent($this->getLayout()->createBlock('feedexport/adminhtml_dynamic_attribute_edit'))
            ->_addLeft($this->getLayout()->createBlock('feedexport/adminhtml_dynamic_attribute_edit_tabs'));

        $this->renderLayout();
    }

    public function saveAction()
    {
        if ($data = $this->getRequest()->getPost()) {
            if (isset($data['import'])) {
                return $this->doimportAction();
            }

            $model = $this->_initModel();
            $model->addData($data);

            try {
                $model->save();

                Mage::getSingleton('adminhtml/session')->addSuccess(Mage::helper('feedexport')->__('Attribute was successfully saved'));

                if ($this->getRequest()->getParam('back') == 'edit') {
                    $this->_redirect('*/*/edit', array('id' => $model->getId()));

                    return;
                }

                $this->_redirect('*/*/');
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($e->getMessage());
                $this->_redirect('*/*/edit', array('id' => $this->getRequest()->getParam('id')));
            }
        } else {
            Mage::getSingleton('adminhtml/session')->addError(Mage::helper('feedexport')->__('Unable to find item to save'));
            $this->_redirect('*/*/');
        }
    }

    public function deleteAction()
    {
        try {
            $model = $this->_initModel();
            $model->delete();

            Mage::getSingleton('adminhtml/session')->addSuccess(Mage::helper('feedexport')->__('Item was successfully deleted'));
        } catch (Exception $e) {
            Mage::getSingleton('adminhtml/session')->addError($e->getMessage());
            $this->_redirect('*/*/edit', array('id' => $this->getRequest()->getParam('id')));
        }

        $this->_redirect('*/*/');
    }

    public function getattributevalueAction()
    {
        $attribute = $this->getRequest()->getParam('attribute');
        $result = array();

        $result['condition'] = Mage::helper('feedexport/html')->getConditionSelectHtml(
                'condition[CID][condition][]', null, $attribute);
        $result['value'] = Mage::helper('feedexport/html')->getAttributeValueHtml(
                'condition[CID][value][]', null, $attribute);

        $this->getResponse()->setBody(Zend_Json::encode($result));
    }

    public function _initModel()
    {
        $model = Mage::getModel('feedexport/dynamic_attribute');

        if ($this->getRequest()->getParam('id')) {
            $model->load($this->getRequest()->getParam('id'));
        }

        Mage::register('current_model', $model);

        return $model;
    }

    public function massDeleteAction()
    {
        foreach ($this->getRequest()->getParam('dynamic_attribute') as $id) {
            $model = Mage::getModel('feedexport/dynamic_attribute')->load($id);
            try {
                $model->delete();
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($e->getMessage());
                $this->_redirect('*/*/');

                return;
            }

            Mage::getSingleton('adminhtml/session')->addSuccess(__('Dynamic Attribute "%s" was deleted', $model->getName()));
        }

        $this->_redirect('*/*/');
    }

    public function importAction()
    {
        $this->_initAction();
        $this->_addContent($this->getLayout()->createBlock('feedexport/adminhtml_dynamic_attribute_import'));
        $this->renderLayout();
    }

    public function doimportAction()
    {
        if ($data = $this->getRequest()->getPost()) {
            foreach ($data['dynamic_attribute'] as $dynamicAttributePath) {
                $model = Mage::getModel('feedexport/dynamic_attribute')->import($dynamicAttributePath);

                Mage::getSingleton('adminhtml/session')->addSuccess(__('Dynamic Attribute "%s" was imported', $model->getName()));
            }
        }

        $this->_redirect('*/*/');
    }

    public function exportAction()
    {
        $model = $this->_initModel();
        $path = $model->export();

        Mage::getSingleton('adminhtml/session')->addSuccess(__('Dynamic Attribute "%s" was exported to %s', $model->getName(), $path));
        $this->_redirect('*/*/');
    }

    public function massExportAction()
    {
        foreach ($this->getRequest()->getParam('dynamic_attribute') as $dynamicAttribute) {
            $model = Mage::getModel('feedexport/dynamic_attribute')->load($dynamicAttribute);
            $path = $model->export();

            Mage::getSingleton('adminhtml/session')->addSuccess(__('Dynamic Attribute "%s" was exported to %s', $model->getName(), $path));
        }

        $this->_redirect('*/*/');
    }

    protected function _isAllowed()
    {
        return Mage::getSingleton('admin/session')->isAllowed('catalog/feedexport/feedexport_custom_attribute');
    }
}
