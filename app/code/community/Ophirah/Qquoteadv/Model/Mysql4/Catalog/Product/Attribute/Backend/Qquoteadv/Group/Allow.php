<?php
/**
 *
 * CART2QUOTE CONFIDENTIAL
 * __________________
 *
 *  [2009] - [2019] Cart2Quote B.V.
 *  All Rights Reserved.
 *
 * NOTICE OF LICENSE
 *
 * All information contained herein is, and remains
 * the property of Cart2Quote B.V. and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Cart2Quote B.V.
 * and its suppliers and may be covered by European and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Cart2Quote B.V.
 *
 * @category    Ophirah
 * @package     Qquoteadv
 * @copyright   Copyright (c) 2019 Cart2Quote B.V. (https://www.cart2quote.com)
 * @license     https://www.cart2quote.com/ordering-licenses(https://www.cart2quote.com)
 */

/**
 * Class Ophirah_Qquoteadv_Model_Mysql4_Catalog_Product_Attribute_Backend_Qquoteadv_Group_Allow
 */
class Ophirah_Qquoteadv_Model_Mysql4_Catalog_Product_Attribute_Backend_Qquoteadv_Group_Allow
    extends Ophirah_Qquoteadv_Model_Mysql4_Catalog_Product_Attribute_Backend_Qquoteadv_Group_Abstract
{
    /**
     * Construct function
     */
    protected function _construct()
    {
        $this->_init('qquoteadv/product_attribute_group_allow', 'value_id');
    }
}
