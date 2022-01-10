<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_CustomerController extends Mage_Core_Controller_Front_Action
{
    const CSV_FILE_NAME = 'personal-data.csv';

    public function preDispatch()
    {
        parent::preDispatch();

        if (!$this->getSession()->authenticate($this)) {
            $this->setFlag('', 'no-dispatch', true);
        }
    }

    public function anonymiseAction()
    {
        if (Mage::getStoreConfig('amgdpr/customer_access_control/anonymize')) {
            $customer = $this->getSession()->getCustomer();

            if (!$customer->validatePassword($this->getRequest()->getPost('current_password'))) {
                $this->getSession()->addError($this->__('Wrong Password'));
                $this->_redirect('*/*/settings');
                return;
            }
            try {
                $anonymisator = Mage::getSingleton('amgdpr/anonymizeModel');
                $customerId = $customer->getId();
                $orderIncrementIds = $anonymisator->avoidAnonymisation($customerId);
                if ($orderIncrementIds) {
                    $this->getSession()->addError($this->__('Your account can not be anonymized right now, because you have non-completed order(s): %s', implode(', ', $orderIncrementIds)));
                } else {
                    $anonymisator->anonymizeCustomer($customerId);
                    Mage::getSingleton('core/session')->addSuccess($this->__('Anonymisation was successful'));
                }
            } catch (Exception $exception) {
                $this->getSession()->addError($this->__('An error has occurred'));
                Mage::logException($exception);
            }
        } else {
            $this->getSession()->addError($this->__('Access denied.'));
        }

        $this->_redirectReferer();
    }

    public function downloadCsvAction()
    {
        if (!Mage::getStoreConfig('amgdpr/customer_access_control/download')) {
            $this->getSession()->addError($this->__('Access denied.'));
            $this->_redirect('*/*/settings');
            return;
        }

        /** @var Amasty_Gdpr_Model_CustomerData $customerData */
        $customerData = Mage::getSingleton('amgdpr/customerData');
        $customer = $this->getSession()->getCustomer();

        if (!$customer->validatePassword($this->getRequest()->getPost('current_password'))) {
            $this->getSession()->addError($this->__('Wrong Password'));
            $this->_redirect('*/*/settings');
            return;
        }
        try {
            $data = $customerData->getPersonalData($this->getSession()->getId());

            ob_start();
            $out = fopen('php://output', 'w');

            foreach ($data as $row) {
                fputcsv($out, $row);
            }
            $csvContent = ob_get_clean();

            $version = Mage::helper('amgdpr')->getEeMageVersion('1.5.0.1');
            if (version_compare(Mage::getVersion(), $version, '>=')) {
                $this->_prepareDownloadResponse(
                    self::CSV_FILE_NAME,
                    $csvContent,
                    'text/csv'
                );
            } else {
                $this->_prepareDownloadResponseForOldMagentoVersions(
                    self::CSV_FILE_NAME,
                    $csvContent,
                    'text/csv'
                );
            }
        } catch (Exception $e) {
            $this->getSession()->addError($this->__('An error has occurred'));
            Mage::logException($e);
            $this->_redirect('*/*/settings');
        }
    }

    /**
     * @return Mage_Customer_Model_Session
     */
    protected function getSession()
    {
        /** @var Mage_Customer_Model_Session $customerSession */
        $customerSession = Mage::getSingleton('customer/session');

        return $customerSession;
    }

    public function settingsAction()
    {
        $this->loadLayout();
        $this->_initLayoutMessages('customer/session');

        $block = $this->getLayout()->getBlock('privacy_settings');

        try {
            if ($block) {
                $block->setRefererUrl($this->_getRefererUrl());
            }
            $this->getLayout()->getBlock('head')->setTitle($this->__('Privacy Settings'));
            $this->getLayout()->getBlock('messages')->setEscapeMessageFlag(true);
        } catch (Exception $e) {
            Mage::logException($e);
        }

        $this->renderLayout();
    }

    public function deleteRequestAction()
    {
        if (!Mage::getStoreConfig('amgdpr/customer_access_control/delete')) {
            $this->getSession()->addError($this->__('Access denied.'));
            $this->_redirect('*/*/settings');
            return;
        }

        $customer = $this->getSession()->getCustomer();

        if (!$customer->validatePassword($this->getRequest()->getPost('current_password'))) {
            $this->getSession()->addError($this->__('Wrong Password'));
            $this->_redirect('*/*/settings');
            return;
        }
        try {
            /** @var Amasty_Gdpr_Model_DeleteRequest $request */
            $request = Mage::getModel('amgdpr/deleteRequest');

            $customer = $this->getSession()->getCustomer();
            $request
                ->setData(array(
                    'customer_id' => $customer->getId(),
                    'customer_email' => $customer->getEmail(),
                    'customer_name' => $customer->getName(),
                ))
                ->save();

            Mage::getSingleton('amgdpr/actionLog')->logAction('delete_request_submitted', $customer->getId());

            if (Mage::getStoreConfig('amgdpr/deletion_notification/admin')
                && $to = Mage::getStoreConfig('amgdpr/deletion_notification/to')
            ) {
                $translate = Mage::getSingleton('core/translate');
                $translate->setTranslateInline(false);

                $sender = array(
                    'name' => $customer->getName(),
                    'email' => $customer->getEmail()
                );

                $tpl = Mage::getModel('core/email_template');
                $tpl->setDesignConfig(array('area' => 'frontend', 'store' => $customer->getStore()->getId()))
                    ->sendTransactional(
                        Mage::getStoreConfig('amgdpr/deletion_notification/admin_template'),
                        $sender,
                        $to,
                        Mage::helper('amgdpr')->__('Administrator'),
                        array('customer' => $customer)
                    );
                $translate->setTranslateInline(true);
            }

            $this->getSession()->addSuccess(
                $this->__('Thank you, your account delete request was recorded.')
            );
        } catch (Exception $exception) {
            $this->getSession()->addError($this->__('An error has occurred'));
            Mage::logException($exception);
        }

        $this->_redirectReferer();
    }

    protected function _prepareDownloadResponseForOldMagentoVersions($fileName, $content, $contentType = 'application/octet-stream', $contentLength = null)
    {
        $session = Mage::getSingleton('admin/session');
        if ($session->isFirstPageAfterLogin()) {
            $this->_redirect($session->getUser()->getStartupPageUrl());
            return $this;
        }

        $isFile = false;
        $file   = null;
        if (is_array($content)) {
            if (!isset($content['type']) || !isset($content['value'])) {
                return $this;
            }
            if ($content['type'] == 'filename') {
                $isFile = true;
                $file = $content['value'];
                $contentLength = filesize($file);
            }
        }

        $this->getResponse()
            ->setHttpResponseCode(200)
            ->setHeader('Pragma', 'public', true)
            ->setHeader('Cache-Control', 'must-revalidate, post-check=0, pre-check=0', true)
            ->setHeader('Content-type', $contentType, true)
            ->setHeader('Content-Length', is_null($contentLength) ? strlen($content) : $contentLength)
            ->setHeader('Content-Disposition', 'attachment; filename="'.$fileName.'"')
            ->setHeader('Last-Modified', date('r'));

        if (!is_null($content)) {
            if ($isFile) {
                $this->getResponse()->clearBody();
                $this->getResponse()->sendHeaders();

                $ioAdapter = new Varien_Io_File();
                if (!$ioAdapter->fileExists($file)) {
                    Mage::throwException(Mage::helper('core')->__('File not found'));
                }
                $ioAdapter->open(array('path' => $ioAdapter->dirname($file)));
                $ioAdapter->streamOpen($file, 'r');
                while ($buffer = $ioAdapter->streamRead()) {
                    Mage::helper('ambase/utils')->_echo($buffer);
                }
                $ioAdapter->streamClose();
                if (!empty($content['rm'])) {
                    $ioAdapter->rm($file);
                }

                Mage::helper('ambase/utils')->_exit();
            } else {
                $this->getResponse()->setBody($content);
            }
        }
        return $this;
    }
}
