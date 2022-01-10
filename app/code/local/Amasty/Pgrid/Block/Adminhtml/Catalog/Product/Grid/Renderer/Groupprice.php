<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Pgrid
 */


class Amasty_Pgrid_Block_Adminhtml_Catalog_Product_Grid_Renderer_Groupprice
    extends Amasty_Pgrid_Block_Adminhtml_Catalog_Product_Grid_Renderer_Abstract
{
    public function render(Varien_Object $row)
    {
        $product = Mage::getModel('catalog/product')->load($row->getEntityId());
        $groups = Mage::getModel('customer/group')->getCollection();
        $groupPrice = $product->getData('group_price');
        if (!empty($groupPrice)) {
            $groupPriceString = '<table cellspacing="0" class="data border"><colgroup><col width="120"><col width="120"></colgroup><thead>
            <tr class="headings" style="background: url(' . Mage::getDesign()->getSkinUrl() . 'images/sort_row_bg.gif) 0 50% repeat-x;">
                <th>' . Mage::helper('catalog')->__('Customer Group') . '</th>
                <th class="last">' . Mage::helper('catalog')->__('Price') . '</th>
            </tr>
            </thead>
            <tbody id="group_price_container">';

            foreach ($groupPrice as $groupPriceItem) {
                if ((int)$groupPriceItem['price'] != 0 && (int)$groupPriceItem['website_price'] != 0) {
                    $groupPriceString .= '<tr><td><input class=" input-text required-entry validate-zero-or-greater" style="width:100px;" type="text" value="' . $this->getGroupNameById($groups, (int)$groupPriceItem['cus_group']) . '" readonly></td>' .
                        '<td><input style="width:100px;" class=" input-text required-entry validate-zero-or-greater" type="text" value="' . $groupPriceItem['website_price'] . '" readonly></td></tr>';
                }
            }

            $groupPriceString .= '</tbody></table>';
        } else {
            $groupPriceString = '';
        }

        return $groupPriceString;
    }

    public function getGroupNameById($groups, $id)
    {
        foreach ($groups as $group) {
            if ($group->getData('customer_group_id') == $id) {
                return $group->getData('customer_group_code');
            } else {
                return "unknown";
            }
        }
    }
}
