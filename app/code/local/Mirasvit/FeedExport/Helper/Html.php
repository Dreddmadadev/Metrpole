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



class Mirasvit_FeedExport_Helper_Html extends Mage_Core_Helper_Abstract
{
    protected $_operatorInputByType = array(
        'string' => array('==', '!=', '>=', '>', '<=', '<', '{}', '!{}'),
        'numeric' => array('==', '!=', '>=', '>', '<=', '<'),
        'date' => array('==', '>=', '<='),
        'select' => array('==', '!='),
        'boolean' => array('==', '!='),
        'multiselect' => array('{}', '!{}', '()', '!()'),
        'grid' => array('()', '!()'),
    );

    protected $_operatorOptions = array(
        '==' => 'is',
        '!=' => 'is not',
        '>=' => 'equals or greater than',
        '<=' => 'equals or less than',
        '>' => 'greater than',
        '<' => 'less than',
        '{}' => 'contains',
        '!{}' => 'does not contain',
        '()' => 'is one of',
        '!()' => 'is not one of',
    );

    public function getAttributeSelectHtml($name, $current, $style, $tags = null)
    {
        $attributes = Mage::getSingleton('feedexport/system_config_source_attribute')->toOptionArray();

        $options = array();
        $options['-'][] = '<option value="">'.Mage::helper('feedexport')->__('not set').'</option>';

        foreach ($attributes as $attribute) {
            $selected = '';
            if ($attribute['value'] == $current) {
                $selected = 'selected="selected"';
            }
            $value = $attribute['value'];
            $group = $this->getAttributeGroup($value);

            $options[$group][] = '<option value="'.$value.'" '.$selected.'>'.$attribute['label'].'</option>';
        }

        $id = preg_replace('/[^a-zA-z_]/', '_', $name);

        $html = '<select name="'.$name.'" id="'.$id.'" style="'.$style.'" '.$tags.'>';
        foreach ($options as $group => $items) {
            if ($group == '-') {
                $html .= implode('', $items);
            } else {
                $html .= '<optgroup label="'.$group.'">';
                $html .= implode('', $items);
                $html .= '</optgroup>';
            }
        }

        $html .= '</select>';

        return $html;
    }

    public function getConditionSelectHtml($name, $current = null, $attributeCode = null)
    {
        $conditions = array();

        if ($attributeCode != null) {
            $entityTypeId = Mage::getModel('catalog/product')->getResource()->getTypeId();
            $attribute = Mage::getModel('eav/entity_attribute')->loadByCode($entityTypeId, $attributeCode);
            $type = 'string';
            if ($attributeCode === 'attribute_set_id') {
                $type = 'select';
            } elseif ($attributeCode === 'tracker') {
                $type = 'numeric';
            } else {
                switch ($attribute->getFrontendInput()) {
                    case 'select':
                        $type = 'select';
                        break;

                    case 'multiselect':
                        $type = 'multiselect';
                        break;

                    case 'date':
                        $type = 'date';
                        break;

                    case 'boolean':
                        $type = 'boolean';
                        break;

                    default:
                        $type = 'string';
                }
            }

            foreach ($this->_operatorInputByType[$type] as $operator) {
                $operatorTitle = Mage::helper('rule')->__($this->_operatorOptions[$operator]);
                $selected = $current == $operator ? 'selected="selected"' : '';
                $conditions[] = '<option '.$selected.' value="'.$operator.'">'.$operatorTitle.'</option>';
            }
        }

        return '<select style="width:100px" name="'.$name.'">'.implode('', $conditions).'</select>';
    }

    public function getOutputTypeHtml($name, $current, $tags = null)
    {
        $element = new Varien_Data_Form_Element_Select();
        $element
            ->setForm(new Varien_Object())
            ->setValue($current)
            ->setName($name)
            ->addData($tags)
            ->setValues(array(
                'pattern' => Mage::helper('feedexport')->__('Pattern'),
                'attribute' => Mage::helper('feedexport')->__('Attribute Value'),
            ));

        return $element->getElementHtml();
    }

    public function getAttributeValueHtml($name, $current = null, $attribute = null, $tags = null)
    {
        $html = '';

        $attribute = Mage::getModel('catalog/product')->getResource()->getAttribute($attribute);
        if ($attribute) {
            if ($attribute->getFrontendInput() == 'select' || $attribute->getFrontendInput() == 'multiselect') {
                $options = array();

                foreach ($attribute->getSource()->getAllOptions() as $option) {
                    $selected = '';
                    if ($option['value'] == $current) {
                        $selected = 'selected="selected"';
                    }
                    $options[] = '<option value="'.$option['value'].'" '.$selected.'>'.$option['label'].'</option>';
                }

                $html = '<select style="width:250px" name="'.$name.'" '.$tags.'>';
                $html .= implode('', $options);
                $html .= '</select>';
            }
        }

        if (!$html) {
            $html = '<input style="width:244px" class="input-text" type="text" name="'.$name.'" value="'.$current.'">';
        }

        return $html;
    }

    public function getFormattersHtml($name, $value = null)
    {
        $element = new Varien_Data_Form_Element_Select();
        $element
            ->setForm(new Varien_Object())
            ->setValue($value)
            ->setName($name)
            ->setValues(array(
                '' => Mage::helper('feedexport')->__('Default'),
                'intval' => Mage::helper('feedexport')->__('Integer'),
                'price' => Mage::helper('feedexport')->__('Price'),
                'strip_tags' => Mage::helper('feedexport')->__('Strip Tags'),
            ));

        return $element->getElementHtml();
    }

    public function getAttributeGroup($attributeCode)
    {
        $group = '';

        $primary = array(
            'attribute_set',
            'attribute_set_id',
            'entity_id',
            'full_description',
            'meta_description',
            'meta_keyword',
            'meta_title',
            'name',
            'short_description',
            'description',
            'sku',
            'status',
            'status_parent',
            'url',
            'url_key',
            'visibility',
            'type_id',
            'php',
        );

        $stock = array(
            'is_in_stock',
            'qty',
            'parent_qty',
            'manage_stock',
            'min_sale_qty',
            'max_sale_qty',
        );

        $price = array(
            'tax_class_id',
            'special_from_date',
            'special_to_date',
            'cost',
            'msrp',
        );

        if (substr($attributeCode, 0, strlen('custom:')) == 'custom:') {
            $group = Mage::helper('feedexport')->__('Custom Attributes');
        } elseif (substr($attributeCode, 0, strlen('mapping:')) == 'mapping:') {
            $group = Mage::helper('feedexport')->__('Mapping');
        } elseif (strpos($attributeCode, 'ammeta') !== false) {
            $group = Mage::helper('feedexport')->__('Amasty Meta Tags');
        } elseif (in_array($attributeCode, $primary)) {
            $group = Mage::helper('feedexport')->__('Primary Attributes');
        } elseif (in_array($attributeCode, $stock)) {
            $group = Mage::helper('feedexport')->__('Stock Attributes');
        } elseif (in_array($attributeCode, $price) || strpos($attributeCode, 'price') !== false) {
            $group = Mage::helper('feedexport')->__('Prices & Taxes');
        } elseif (strpos($attributeCode, 'image') !== false || strpos($attributeCode, 'thumbnail') !== false) {
            $group = Mage::helper('feedexport')->__('Images');
        } elseif (strpos($attributeCode, 'category') !== false) {
            $group = Mage::helper('feedexport')->__('Category');
        } else {
            $group = Mage::helper('feedexport')->__('Others Attributes');
        }

        return $group;
    }
}
