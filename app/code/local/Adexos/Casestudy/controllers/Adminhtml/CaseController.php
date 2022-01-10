<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

class Adexos_Casestudy_Adminhtml_CaseController extends Mage_Adminhtml_Controller_Action
{


    public function indexAction()
    {
        $this->loadLayout();
        $this->_addContent($this->getLayout()->createBlock('adexos_casestudy/adminhtml_grid'));
        $this->renderLayout();
    }

    public function exportCsvAction()
    {
        $fileName = 'Casestudy_export.csv';
        $content = $this->getLayout()->createBlock('adexos_casestudy/adminhtml_grid_grid')->getCsv();
        $this->_prepareDownloadResponse($fileName, $content);
    }

    public function exportExcelAction()
    {
        $fileName = 'Casestudy_export.xml';
        $content = $this->getLayout()->createBlock('adexos_casestudy/adminhtml_grid_grid')->getExcelFile();
        $this->_prepareDownloadResponse($fileName, $content);
    }

    public function massDeleteAction()
    {
        $ids = $this->getRequest()->getParam('ids');
        if (!is_array($ids)) {
            $this->_getSession()->addError($this->__('Please select Casestudy(s).'));
        } else {
            try {
                foreach ($ids as $id) {
                    $model = Mage::getSingleton('adexos_casestudy/casestudy')->load($id);
                    $model->delete();
                }

                $this->_getSession()->addSuccess(
                    $this->__('Total of %d record(s) have been deleted.', count($ids))
                );
            } catch (Mage_Core_Exception $e) {
                $this->_getSession()->addError($e->getMessage());
            } catch (Exception $e) {
                $this->_getSession()->addError(
                    Mage::helper('adexos_casestudy')->__('An error occurred while mass deleting items. Please review log and try again.')
                );
                Mage::logException($e);

                return;
            }
        }
        $this->_redirect('*/*/index');
    }

    public function editAction()
    {

        $id = $this->getRequest()->getParam('id');
        $model = Mage::getModel('adexos_casestudy/casestudy');
        $products = array();
        if ($id) {
            $model->load($id);
            if (!$model->getId()) {
                $this->_getSession()->addError(
                    Mage::helper('adexos_casestudy')->__('This Casestudy no longer exists.')
                );
                $this->_redirect('*/*/');

                return;
            }

            $products = Mage::getModel('adexos_casestudy/product')->getCollection()
                ->addFieldToSelect('product_id')
                ->addFieldtoFilter('casestudy_id', $model->getId());
        }

        $data = $this->_getSession()->getFormData(true);
        if (!empty($data)) {
            $model->setData($data);
        }


        //get product have casestudy
        $pId = array();
        foreach ($products as $p) {
            $pId[] = $p->getproductId();
        }
        if (count($products) > 0) {
            $model->setData("product_id", implode(',', $pId));
        }

        Mage::register('cas_data', $model);

        $this->loadLayout();
        $this->_addContent($this->getLayout()->createBlock('adexos_casestudy/adminhtml_grid_edit'))
            ->_addLeft($this->getLayout()
                ->createBlock('adexos_casestudy/adminhtml_grid_edit_tabs')
            );
        $this->renderLayout();

    }

    public function newAction()
    {
        $this->_forward('edit');
    }

    public function saveAction()
    {
        $redirectBack = $this->getRequest()->getParam('back', false);

        if ($data = $this->getRequest()->getPost()) {

            $id = $this->getRequest()->getParam('id');
            $model = Mage::getModel('adexos_casestudy/casestudy');
            if ($id) {
                $model->load($id);
                if (!$model->getId()) {
                    $this->_getSession()->addError(
                        Mage::helper('adexos_casestudy')->__('This Casestudy no longer exists.')
                    );
                    $this->_redirect('*/*/index');

                    return;
                }
            }

            // save model
            try {


                if (isset($_FILES)) {
                    if ($_FILES['iconimage']['name']) {
                        if ($this->getRequest()->getParam("id")) {
                            if ($model->getData('image')) {

                                $io = new Varien_Io_File();
                                $io->rm(Mage::getBaseDir('media') . DS . implode(DS, explode('/', $model->getData('image'))));
                            }
                        }
                        $path = Mage::getBaseDir('media') . DS . 'etude_cas' . DS;

                        $uploader = new Varien_File_Uploader('iconimage');

                        $destFile = $path . $_FILES['iconimage']['name'];


                        $filename = $uploader->getNewFileName($destFile);
                        try {
                            $uploader->save($path, $filename);
                        } catch (Exception $e) {
                            var_dump($e);
                            die;
                        }

                        $data['image'] = 'etude_cas/' . $filename;
                    }
                }


                $model->addData($data);
                $this->_getSession()->setFormData($data);
                $model->save();
                $this->_getSession()->setFormData(false);
                $this->_getSession()->addSuccess(
                    Mage::helper('adexos_casestudy')->__('L\'étude de cas a été sauvegardé.')
                );

                $products = explode(',', $data['product_id']);
                $modelP = Mage::getModel('adexos_casestudy/product')->getCollection()
                    ->addFieldtoFilter('casestudy_id', $model->getId());


                foreach ($modelP as $p) {
                    $p->delete();
                }


                foreach ($products as $product) {
                    $m = Mage::getModel('adexos_casestudy/product');
                    $m->setData('casestudy_id', $model->getId());
                    $m->setData('product_id', $product);
                    $m->save();
                }


            } catch (Mage_Core_Exception $e) {
                $this->_getSession()->addError($e->getMessage());
                $redirectBack = true;
            } catch (Exception $e) {
                $this->_getSession()->addError(Mage::helper('adexos_casestudy')->__('Unable to save the Casestudy.'));
                $redirectBack = true;
                Mage::logException($e);
            }

            if ($redirectBack) {
                $this->_redirect('*/*/edit', array('id' => $model->getId()));

                return;
            }
        }
        $this->_redirect('*/*/index');
    }

    public function deleteAction()
    {
        if ($id = $this->getRequest()->getParam('id')) {
            try {
                // init model and delete
                $model = Mage::getModel('adexos_casestudy/casestudy');
                $model->load($id);
                if (!$model->getId()) {
                    Mage::throwException(Mage::helper('adexos_casestudy')->__('Unable to find a Casestudy to delete.'));
                }
                $model->delete();
                // display success message
                $this->_getSession()->addSuccess(
                    Mage::helper('adexos_casestudy')->__('The Casestudy has been deleted.')
                );
                // go to grid
                $this->_redirect('*/*/index');

                return;
            } catch (Mage_Core_Exception $e) {
                $this->_getSession()->addError($e->getMessage());
            } catch (Exception $e) {
                $this->_getSession()->addError(
                    Mage::helper('adexos_casestudy')->__('An error occurred while deleting Casestudy data. Please review log and try again.')
                );
                Mage::logException($e);
            }
            // redirect to edit form
            $this->_redirect('*/*/edit', array('id' => $id));

            return;
        }
// display error message
        $this->_getSession()->addError(
            Mage::helper('adexos_casestudy')->__('Unable to find a Casestudy to delete.')
        );
// go to grid
        $this->_redirect('*/*/index');
    }

    /**
     * Product grid for AJAX request
     */
    public function gridAction()
    {
        $this->loadLayout();
        $this->renderLayout();
    }

    /**
     * Get specified tab grid
     */
    public function gridOnlyAction()
    {

        $this->loadLayout();
        $this->getResponse()->setBody(
            $this->getLayout()
                ->createBlock('adexos_casestudy/adminhtml_grid_edit_form_renderer_fieldset_product_grid')
                ->toHtml()
        );
    }
}