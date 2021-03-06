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



class Mirasvit_FeedExport_Adminhtml_Feedexport_Dynamic_CategoryController extends Mage_Adminhtml_Controller_Action
{
    protected function _initAction()
    {
        $this->loadLayout()
            ->_setActiveMenu('catalog')
            ->_title(Mage::helper('feedexport')->__('Feed Export'))
            ->_title(Mage::helper('feedexport')->__('Category Mapping'));

        return $this;
    }

    public function indexAction()
    {
        $this->_initAction();
        $this->_addContent($this->getLayout()->createBlock('feedexport/adminhtml_dynamic_category'));
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

        $this->_title($id ? $model->getName() : Mage::helper('feedexport')->__('New Mapping'));
        $this->_initAction();

        $this->_addContent($this->getLayout()->createBlock('feedexport/adminhtml_dynamic_category_edit'))
            ->_addLeft($this->getLayout()->createBlock('feedexport/adminhtml_dynamic_category_edit_tabs'));

        $this->renderLayout();
    }

    public function saveAction()
    {
        if ($data = $this->getRequest()->getPost()) {
            $model = $this->_initModel();
            $model->setData($data);

            try {
                $model->save();

                Mage::getSingleton('adminhtml/session')->addSuccess(Mage::helper('feedexport')->__('Item was successfully saved'));

                if ($this->getRequest()->getParam('back')) {
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

    public function _initModel()
    {
        $model = Mage::getModel('feedexport/dynamic_category');
        if ($this->getRequest()->getParam('id')) {
            $model->load($this->getRequest()->getParam('id'));
        }

        Mage::register('current_model', $model);

        return $model;
    }

    protected function _isAllowed()
    {
        return Mage::getSingleton('admin/session')->isAllowed('catalog/feedexport/feedexport_mapping_category');
    }
}
