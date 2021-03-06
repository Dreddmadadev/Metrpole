<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Adminhtml_Amgdpr_PolicyController extends Mage_Adminhtml_Controller_Action
{
    public function indexAction()
    {
        $this->loadLayout();
        $this->_setActiveMenu('customer/amgdpr/privacy_policy');
        $this->_title($this->__('Privacy Policy'));
        $this->_addBreadcrumb($this->__('Privacy Policy'), $this->__('Privacy Policy'));
        $block = $this->getLayout()->createBlock('amgdpr/adminhtml_policy');
        $this->_addContent($block);
        $this->renderLayout();
    }

    public function exportCsvAction()
    {
        $this->_exportGrid('csv');
    }

    public function exportXmlAction()
    {
        $this->_exportGrid('xml');
    }

    protected function _exportGrid($type)
    {
        $fileName = 'amasty_privacy_policy_admin_export.' . $type;
        $block = $this->getLayout()->createBlock('amgdpr/adminhtml_policy_grid');
        switch ($type) {
            case 'xml' :
                $content = $block->getXml();
                break;

            case 'csv' :
                $content = $block->getCsv();
                break;

            default :
                throw new Exception($this->__('Please specify export data type'));
                break;
        }

        $this->_prepareDownloadResponse($fileName, $content);
    }

    protected function _isAllowed()
    {
        return Mage::getSingleton('admin/session')->isAllowed('customer/amgdpr/privacy_policy');
    }

    protected function _initPolicy()
    {
        $this->_title($this->__('Policies'))->_title($this->__('Manage Policies'));

        $policyId = (int)$this->getRequest()->getParam('id');
        $policy = Mage::getModel('amgdpr/privacyPolicy');

        if ($policyId) {
            $policy->load($policyId);
        }

        Mage::register('current_policy', $policy);

        return $this;
    }

    public function newAction()
    {
        $this->_forward('edit');
    }

    public function cloneAction()
    {
        $policyId = (int)$this->getRequest()->getParam('id');
        $policy = Mage::getModel('amgdpr/privacyPolicy')->load($policyId)->getData();

        $clonedPolicy['status'] = Amasty_Gdpr_Model_PrivacyPolicy::STATUS_DRAFT;
        $clonedPolicy['content'] = $policy['content'];
        $clonedPolicy['comment'] = $policy['comment'];

        $newPolicyId = Mage::getModel('amgdpr/privacyPolicy')
            ->addData($clonedPolicy)
            ->save()
            ->getId();

        $this->_redirect('*/*/edit', array('id' => $newPolicyId));
    }

    public function editAction()
    {
        $this->_initPolicy();
        $this->loadLayout();

        $this->_title($this->__('Edit Privacy Policy'));

        $policy = Mage::registry('current_policy');
        if ($policy->getId()) {
            $this->_addLeft($this->getLayout()->createBlock('adminhtml/store_switcher'));
        }
        $this->_setActiveMenu('cms/amgdpr/privacyPolicy');

        $this->_addContent($this->getLayout()->createBlock('amgdpr/adminhtml_policy_edit'));
        $this->_addLeft($this->getLayout()->createBlock('amgdpr/adminhtml_policy_edit_tabs'));

        $this->renderLayout();
    }

    public function saveAction()
    {
        if ($data = $this->getRequest()->getPost()) {
            $this->_initPolicy();

            $id = (int)$this->getRequest()->getParam('id');
            $policyVersion = $this->getRequest()->getParam('policy_version');
            $existingPolicy = Mage::getResourceModel('amgdpr/privacyPolicy_collection')
                ->addFieldToFilter('policy_version', $policyVersion)
                ->getFirstItem()
                ->getData();

            if ($existingPolicy && $existingPolicy['id'] != $id) {
                $this->_getSession()->addError($this->__('This policy version is already exists.'));
                return $this->_redirect('*/*/edit', array('id' => $id));
            }

            $storeId = $this->getRequest()->getParam('store');
            $model = Mage::getModel('amgdpr/privacyPolicy')->load($id);

            if (!$model->getId() && $id) {
                $this->_getSession()->addError($this->__('This policy no longer exists.'));
                return $this->_redirect('*/*/');
            }

            $modelContent = Mage::getResourceModel('amgdpr/privacyPolicyContent_collection')
                ->addFieldToFilter('store_id', $storeId)
                ->addFieldToFilter('policy_id', $id)
                ->getFirstItem();
            $useDefault = (bool)$this->getRequest()->getPost('use_default');

            if(!isset($data['status'])) {
                $data['status'] = Amasty_Gdpr_Model_PrivacyPolicy::STATUS_DRAFT;
            }
            $data['last_edited_by'] = Mage::getSingleton('admin/session')->getUser()->getId();

            $model->addData($data);

            if (!$useDefault && $storeId) {
                unset($data['id']);
                $model->unsetData('content');
                $data['policy_id'] = $id;
                $data['store_id'] = $storeId;
                $modelContent->addData($data);
            }

            try {
                if (!$useDefault && $storeId) {
                    $modelContent->save();
                } else if ($useDefault && $storeId) {
                    if ($modelContent->getId()) {
                        $modelContent->delete();
                    }
                }

                $model->save();

                $this->_getSession()->addSuccess($this->__('The policy has been saved.'));

                if ($this->getRequest()->getParam('back')) {
                    $this->_redirect('*/*/edit', array('id' => $model->getId()));
                    return;
                }

            } catch (Exception $e) {
                $this->_getSession()->addError($e->getMessage());
                $this->_getSession()->setFormData($data);
                $this->_redirect('*/*/edit', array('policy_id' => $this->getRequest()->getParam('id')));
                return;
            }
        }
        $this->_redirect('*/*/');
    }

    public function massDeleteAction()
    {
        $error = false;
        $ids = Mage::app()->getRequest()->getParam('policy');
        foreach ($ids as $id) {
            try {
                $this->_deletePolicy($id);
            } catch (Mage_Core_Exception $e) {
                $this->_getSession()->addError($e->getMessage());
                $error = true;
            } catch (Exception $e) {
                Mage::logException($e);
                $this->_getSession()->addError($e->getMessage());
                $error = false;
            }
        }

        if (!$error) {
            $this->_getSession()->addSuccess($this->__('Policies deleted.'));
        }

        $this->_redirect('*/*/');
    }

    public function deleteAction()
    {
        $id = Mage::app()->getRequest()->getParam('id');
        try {
            $this->_deletePolicy($id);
        } catch (Mage_Core_Exception $e) {
            $this->_getSession()->addError($e->getMessage());
        }
        $this->_redirect('*/*/');
    }

    protected function _deletePolicy($id)
    {
        $currentStatus = Mage::getResourceModel('amgdpr/privacyPolicy_collection')
            ->addFieldToFilter('id',$id)
            ->getFirstItem()
            ->getData('status');

        if ($currentStatus == Amasty_Gdpr_Model_PrivacyPolicy::STATUS_ENABLED) {
            throw new Mage_Core_Exception($this->__("Can't delete active policy."));
        }

        $model = Mage::getModel('amgdpr/privacyPolicy')->load($id);
        if ($model->getId()) {
            $model->delete();
        }
    }
}
