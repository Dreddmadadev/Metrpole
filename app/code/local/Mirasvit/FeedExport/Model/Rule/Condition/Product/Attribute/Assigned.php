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



class Mirasvit_FeedExport_Model_Rule_Condition_Product_Attribute_Assigned extends Mage_SalesRule_Model_Rule_Condition_Product_Attribute_Assigned
{
    /**
     * {@inheritdoc}
     */
    public function validate(Varien_Object $object)
    {
        $product    = $this->_getProduct($object);
        $attributes = $product->getAttributes();

        return $this->getOperator() == self::OPERATOR_ATTRIBUTE_IS_ASSIGNED
            && array_key_exists($this->getAttribute(), $attributes) && $product->getData($this->getAttribute())
            || $this->getOperator() == self::OPERATOR_ATTRIBUTE_IS_NOT_ASSIGNED
            && (!array_key_exists($this->getAttribute(), $attributes) || !$product->getData($this->getAttribute()));
    }


    /**
     * {@inheritdoc}
     */
    public function asHtml()
    {
        return $this->_getHelper()->__(
            'Value for attribute "%s" %s %s %s',
            $this->getAttributeElementHtml(),
            $this->getOperatorElementHtml(),
            $this->getRemoveLinkHtml(),
            $this->getTypeElementHtml()
        );
    }
}
