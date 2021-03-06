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


class Mirasvit_FeedExport_Block_Adminhtml_Rule_Edit extends Mage_Adminhtml_Block_Widget_Form_Container
{
    public function __construct()
    {
        parent::__construct();

        $this->_objectId   = 'rule_id';
        $this->_blockGroup = 'feedexport';
        $this->_controller = 'adminhtml_rule';

        if ($this->getRequest()->getParam('popup')) {
            $this->_removeButton('back');
            $this->_addButton(
                'close',
                array(
                    'label'   => Mage::helper('feedexport')->__('Close Window'),
                    'class'   => 'cancel',
                    'onclick' => 'window.close()',
                    'level'   => -1
                )
            );
        } else {
            $this->_addButton(
                'save_and_edit_button',
                array(
                    'label'   => Mage::helper('feedexport')->__('Save and Continue Edit'),
                    'onclick' => 'saveAndContinueEdit()',
                    'class'   => 'save'
                ),
                100
            );
            $this->_formScripts[] = "
                function saveAndContinueEdit() {
                    editForm.submit($('edit_form').action + 'back/edit/');
                }
            ";

            if (!Mage::registry('current_model')->getId()) {
                $this->_removeButton('save');
            }
        }

        $this->_updateButton('save', 'label', Mage::helper('feedexport')->__('Save Filter'));
    }

    public function getHeaderText()
    {
        if (Mage::registry('current_model')->getId() > 0) {
            $name = Mage::registry('current_model')->getName();
            return Mage::helper('feedexport')->__("Edit Filter '%s'", $this->htmlEscape($name));
        } else {
            return Mage::helper('feedexport')->__('Add Filter');
        }
    }
}