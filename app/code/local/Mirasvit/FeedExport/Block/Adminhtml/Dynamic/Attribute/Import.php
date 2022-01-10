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



class Mirasvit_FeedExport_Block_Adminhtml_Dynamic_Attribute_Import extends Mage_Adminhtml_Block_Widget_Form_Container
{
    public function __construct()
    {
        parent::__construct();

        $this->_objectId = 'dynamic_attribute';
        $this->_blockGroup = 'feedexport';
        $this->_mode = 'import';
        $this->_controller = 'adminhtml_dynamic_attribute';

        $this->_addButton('save', array(
            'label' => __('Import Dynamic Attributes'),
            'onclick' => 'editForm.submit();',
            'class' => 'save',
        ), 1);

        return $this;
    }

    public function getHeaderText()
    {
        return __('Import Dynamic Attributes');
    }
}
