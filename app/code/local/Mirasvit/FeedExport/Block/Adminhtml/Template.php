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


class Mirasvit_FeedExport_Block_Adminhtml_Template extends Mage_Adminhtml_Block_Widget_Grid_Container
{
    public function __construct()
    {
        $this->_controller     = 'adminhtml_template';
        $this->_blockGroup     = 'feedexport';
        $this->_headerText     = Mage::helper('feedexport')->__('Manage Feed Templates');
        $this->_addButtonLabel = Mage::helper('feedexport')->__('Add Template');

        $this->_addButton('import', array(
            'label'   => Mage::helper('feedexport')->__('Import Templates'),
            'onclick' => 'setLocation(\''.Mage::helper("adminhtml")->getUrl('*/*/import').'\')',
            'class'   => 'import',
        ));

        return parent::__construct();
    }
}