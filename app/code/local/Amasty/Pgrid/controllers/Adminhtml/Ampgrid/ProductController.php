<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Pgrid
 */
class Amasty_Pgrid_Adminhtml_Ampgrid_ProductController extends Mage_Adminhtml_Controller_Action
{
    /**
     * Export order grid to CSV format
     */
    public function exportCsvAction()
    {
        $fileName   = 'products.csv';
        $grid       = $this->getLayout()->createBlock('adminhtml/catalog_product_grid');
        $this->_prepareDownloadResponse($fileName, $grid->getCsvFile());
    }

    /**
     *  Export order grid to Excel XML format
     */
    public function exportExcelAction()
    {
        $fileName   = 'products.xml';
        $grid       = $this->getLayout()->createBlock('adminhtml/catalog_product_grid');
        $this->_prepareDownloadResponse($fileName, $grid->getExcelFile($fileName));
    }

    protected function _isAllowed()
    {
        return Mage::getSingleton('admin/session')->isAllowed(
            'catalog/products'
        );
    }
}