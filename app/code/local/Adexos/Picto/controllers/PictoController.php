<?php
/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 16/03/18
 * Time: 17:25
 */
class Adexos_Picto_PictoController extends Mage_Adminhtml_Controller_Action {

    public function indexAction()
    {
        $this->loadLayout();
        $this->_addContent($this->getLayout()->createBlock('adexos_picto/grid'));
        $this->renderLayout();
    }

    public function exportCsvAction()
    {
        $fileName = 'Picto_export.csv';
        $content = $this->getLayout()->createBlock('adexos_picto/grid_grid')->getCsv();
        $this->_prepareDownloadResponse($fileName, $content);
    }

    public function exportExcelAction()
    {
        $fileName = 'Picto_export.xml';
        $content = $this->getLayout()->createBlock('adexos_picto/grid_grid')->getExcelFile();
        $this->_prepareDownloadResponse($fileName, $content);
    }

    public function massDeleteAction()
    {
        $ids = $this->getRequest()->getParam('ids');
        if (!is_array($ids)) {
            $this->_getSession()->addError($this->__('Please select Picto(s).'));
        } else {
            try {
                foreach ($ids as $id) {
                    $model = Mage::getSingleton('adexos_picto/picto')->load($id);
                    $model->delete();
                }

                $this->_getSession()->addSuccess(
                    $this->__('Total of %d record(s) have been deleted.', count($ids))
                );
            } catch (Mage_Core_Exception $e) {
                $this->_getSession()->addError($e->getMessage());
            } catch (Exception $e) {
                $this->_getSession()->addError(
                    Mage::helper('adexos_picto')->__('An error occurred while mass deleting items. Please review log and try again.')
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
        $model = Mage::getModel('adexos_picto/picto');

        if ($id) {
            $model->load($id);
            if (!$model->getId()) {
                $this->_getSession()->addError(
                    Mage::helper('adexos_picto')->__('This Picto no longer exists.')
                );
                $this->_redirect('*/*/');
                return;
            }
        }

        $data = $this->_getSession()->getFormData(true);
        if (!empty($data)) {
            $model->setData($data);
        }

        Mage::register('current_model', $model);

        $this->loadLayout();
        $this->_addContent($this->getLayout()->createBlock('adexos_picto/grid_edit'));
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
            $model = Mage::getModel('adexos_picto/picto');
            if ($id) {
                $model->load($id);
                if (!$model->getId()) {
                    $this->_getSession()->addError(
                        Mage::helper('adexos_picto')->__('This Picto no longer exists.')
                    );
                    $this->_redirect('*/*/index');
                    return;
                }
            }

            // save model
            try {

                if (isset($_FILES)) {
                    if ($_FILES['image']['name']) {
                        if ($this->getRequest()->getParam("id")) {
                            if ($model->getData('image')) {

                                $io = new Varien_Io_File();
                                $io->rm(Mage::getBaseDir('media') . DS . implode(DS, explode('/', $model->getData('image'))));
                            }
                        }
                        $path = Mage::getBaseDir('media') . DS . 'picto' . DS;

                        $uploader = new Varien_File_Uploader('image');

                        $destFile = $path . $_FILES['image']['name'];


                        $filename = $uploader->getNewFileName($destFile);
                        try {
                            $uploader->save($path, $filename);
                        } catch (Exception $e) {
                            var_dump($e);
                            die;
                        }

                        $data['image'] = 'picto/' . $filename;
                    }
                }

                $model->addData($data);
                $this->_getSession()->setFormData($data);
                $model->save();
                $this->_getSession()->setFormData(false);
                $this->_getSession()->addSuccess(
                    Mage::helper('adexos_picto')->__('The Picto has been saved.')
                );
            } catch (Mage_Core_Exception $e) {
                $this->_getSession()->addError($e->getMessage());
                $redirectBack = true;
            } catch (Exception $e) {
                $this->_getSession()->addError(Mage::helper('adexos_picto')->__('Unable to save the Picto.'));
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
                $model = Mage::getModel('adexos_picto/picto');
                $model->load($id);
                if (!$model->getId()) {
                    Mage::throwException(Mage::helper('adexos_picto')->__('Unable to find a Picto to delete.'));
                }
                $model->delete();
                // display success message
                $this->_getSession()->addSuccess(
                    Mage::helper('adexos_picto')->__('The Picto has been deleted.')
                );
                // go to grid
                $this->_redirect('*/*/index');
                return;
            } catch (Mage_Core_Exception $e) {
                $this->_getSession()->addError($e->getMessage());
            } catch (Exception $e) {
                $this->_getSession()->addError(
                    Mage::helper('adexos_picto')->__('An error occurred while deleting Picto data. Please review log and try again.')
                );
                Mage::logException($e);
            }
            // redirect to edit form
            $this->_redirect('*/*/edit', array('id' => $id));
            return;
        }
// display error message
        $this->_getSession()->addError(
            Mage::helper('adexos_picto')->__('Unable to find a Picto to delete.')
        );
// go to grid
        $this->_redirect('*/*/index');
    }
}