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


class Mirasvit_FeedExport_Block_Adminhtml_Template_Edit extends Mage_Adminhtml_Block_Widget_Form_Container
{
    public function __construct()
    {
        parent::__construct();

        $this->_objectId   = 'template_id';
        $this->_blockGroup = 'feedexport';
        $this->_controller = 'adminhtml_template';

        $this->_addButton('saveandcontinue', array(
            'label'     => Mage::helper('feedexport')->__('Save And Continue Edit'),
            'onclick'   => 'saveAndContinueEdit()',
            'class'     => 'save',
        ), -100);

        $this->_formScripts[] = "
            function saveAndContinueEdit(){
                editForm.submit($('edit_form').action + 'back/edit/');
            }
        ";
    }

    public function getHeaderText()
    {
        if (Mage::registry('current_model')->getId() > 0) {
            return Mage::helper('feedexport')->__("Edit Template '%s'", $this->htmlEscape(Mage::registry('current_model')->getName()));
        } else {
            return Mage::helper('feedexport')->__('Add Template');
        }
    }
}