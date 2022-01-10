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



class Mirasvit_FeedExport_Model_Rule_Condition_Combine extends Mage_Rule_Model_Condition_Combine
{
    public function __construct()
    {
        parent::__construct();
        $this->setType('feedexport/rule_condition_combine');
    }

    /**
     * Get type of current rule.
     *
     * @return string
     */
    private function getRuleType()
    {
        if ($this->getRule()->getType()) {
            $type = $this->getRule()->getType();
        } else {
            $type = Mage::app()->getRequest()->getParam('rule_type');
        }

        return $type;
    }

    public function getNewChildSelectOptions()
    {
        $type = $this->getRuleType();
        if ($type == Mirasvit_FeedExport_Model_Rule::TYPE_ATTRIBUTE) {
            $itemAttributes = $this->_getProductAttributes();
            $condition = 'product'.$this->getRulePrefix();
        } else {
            $itemAttributes = $this->_getPerformanceAttributes();
            $condition = 'performance';
        }

        $conditions = parent::getNewChildSelectOptions();
        $conditions = array_merge_recursive($conditions, array(
            array(
                'value' => 'feedexport/rule_condition_combine',
                'label' => Mage::helper('feedexport')->__('Conditions Combination'),
            ),
            array(
                'value' => 'feedexport/rule_condition_combine_parent',
                'label' => Mage::helper('feedexport')->__('Parent Product Attributes'),
            )
        ));

        $attributes = $this->getAttributeConditions($itemAttributes, $condition);
        if ($type == Mirasvit_FeedExport_Model_Rule::TYPE_ATTRIBUTE) {
            $attributes = array_merge($attributes, $this->getAssignedAttributeConditions());
        }

        foreach ($attributes as $group => $arrAttributes) {
            $conditions = array_merge_recursive($conditions, array(
                array(
                    'label' => $group,
                    'value' => $arrAttributes,
                ),
            ));
        }

        return $conditions;
    }

    /**
     * Get product attribute conditions grouped by segments.
     *
     * @param array $itemAttributes
     * @param string $condition
     *
     * @return array
     */
    private function getAttributeConditions($itemAttributes, $condition)
    {
        $attributes = array();
        foreach ($itemAttributes as $code => $label) {
            $group = Mage::helper('feedexport/html')->getAttributeGroup(
                str_replace(Mirasvit_FeedExport_Model_Rule_Condition_Combine_Parent::ATTR_CODE_PREFIX, '', $code)
            );
            $attributes[$group][] = array(
                'value' => 'feedexport/rule_condition_'.$condition.'|'.$code,
                'label' => $label,
            );
        }

        return $attributes;
    }


    /**
     * Get assigned product attribute conditions.
     *
     * @return array
     */
    private function getAssignedAttributeConditions()
    {
        $attributes = array();
        $itemAttributes = Mage::getModel('salesrule/rule_condition_product')
            ->loadAttributeOptions()
            ->getAttributeOption();

        $group = Mage::helper('feedexport')->__('Product Attribute Value Assigned');
        foreach ($itemAttributes as $code => $label) {
            $attributes[$group][] = array(
                'value' => 'feedexport/rule_condition_product_attribute_assigned|'.$code,
                'label' => $label
            );
        }

        return $attributes;
    }

    public function collectValidatedAttributes($productCollection)
    {
        foreach ($this->getConditions() as $condition) {
            $condition->collectValidatedAttributes($productCollection);
        }

        return $this;
    }

    protected function _getProductAttributes()
    {
        $productCondition = Mage::getModel('feedexport/rule_condition_product');
        $productAttributes = $productCondition->loadAttributeOptions()->getAttributeOption();

        return $productAttributes;
    }

    protected function _getPerformanceAttributes()
    {
        $performanceCondition = Mage::getModel('feedexport/rule_condition_performance');
        $performanceAttributes = $performanceCondition->loadAttributeOptions()->getAttributeOption();

        return $performanceAttributes;
    }
}
