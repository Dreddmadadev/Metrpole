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


class Mirasvit_FeedExport_Block_Adminhtml_Dynamic_Attribute_Edit_Tab_Conditions extends Mage_Adminhtml_Block_Template
{
    public function __construct()
    {
        parent::__construct();
        $this->setTemplate('mirasvit/feedexport/dynamic/attribute/conditions.phtml');
    }

    public function getModel()
    {
        return Mage::registry('current_model');
    }

    public function getConditionSelect($rowId, $conditionId, $current = null, $customName = '', $attrCode = ''){

        if ($attrCode) {
            $attribute = Mage::getModel('catalog/product')->getResource()->getAttribute($attrCode);

            if ($attribute && in_array($attribute->getFrontendInput(), array('select', 'multiselect'))) {
                $options = array(
                    '<option '.($current == 'eq' ? 'selected="selected"' : '').' value="eq">'.Mage::helper('feedexport')->__('equal').'</option>',
                    '<option '.($current == 'neq' ? 'selected="selected"' : '').' value="neq">'.Mage::helper('feedexport')->__('not equal').'</option>',
                );
            }
        }

        if(empty($options)) {
            $options = array(
                '<option '.($current == 'eq' ? 'selected="selected"' : '').' value="eq">'.Mage::helper('feedexport')->__('equal').'</option>',
                '<option '.($current == 'neq' ? 'selected="selected"' : '').' value="neq">'.Mage::helper('feedexport')->__('not equal').'</option>',
                '<option '.($current == 'gt' ? 'selected="selected"' : '').' value="gt">'.Mage::helper('feedexport')->__('greater than').'</option>',
                '<option '.($current == 'lt' ? 'selected="selected"' : '').' value="lt">'.Mage::helper('feedexport')->__('less than').'</option>',
                '<option '.($current == 'gteq' ? 'selected="selected"' : '').' value="gteq">'.Mage::helper('feedexport')->__('greater than or equal to').'</option>',
                '<option '.($current == 'lteq' ? 'selected="selected"' : '').' value="lteq">'.Mage::helper('feedexport')->__('less than or equal to').'</option>',
                '<option '.($current == 'like' ? 'selected="selected"' : '').' value="like">'.Mage::helper('feedexport')->__('like').'</option>',
                '<option '.($current == 'nlike' ? 'selected="selected"' : '').' value="nlike">'.Mage::helper('feedexport')->__('not like').'</option>',
            );
        }

        return '<select style="width:120px" name="' . ($customName ? $customName : 'option['.$rowId.'][condition]['.$conditionId.'][condition]' ) . '">'.implode('', $options).'</select>';
    }
}
