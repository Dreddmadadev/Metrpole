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


class Mirasvit_FeedExport_Block_Adminhtml_Report_Tracker extends Mage_Adminhtml_Block_Widget_Grid_Container
{
    public function __construct()
    {
        $this->_controller = 'adminhtml_report_tracker';
        $this->_blockGroup = 'feedexport';
        $this->_headerText = Mage::helper('feedexport')->__('Feed Report');

        parent::__construct();

        $this->setTemplate('report/grid/container.phtml');
        $this->_removeButton('add');

        $this->addButton('filter_form_submit', array(
            'label'   => Mage::helper('feedexport')->__('Show Report'),
            'onclick' => 'filterFormSubmit()'
        ));
    }

    public function getFilterUrl()
    {
        $this->getRequest()->setParam('filter', null);

        return $this->getUrl('*/*/index', array('_current' => true));
    }
}
