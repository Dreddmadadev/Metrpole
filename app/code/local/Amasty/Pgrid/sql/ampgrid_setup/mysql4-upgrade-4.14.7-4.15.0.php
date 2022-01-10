<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Pgrid
 */


$this->startSetup();

$conn->insertOnDuplicate(
    $this->getTable('ampgrid/grid_column'),
    array(
        'code'          => 'image_boolean',
        'title'         => 'Products With Assigned Images',
        'column_type'   => 'extra',
        'editable'   => 0,
        'visible'    => 1
    )
);

$groupCollection = Mage::getModel('ampgrid/group')->getCollection();
$column = Mage::getModel('ampgrid/column')->getCollection()->addFieldToFilter('code', 'image_boolean')->getFirstItem();
if (0 < $groupCollection->getSize()
    && $column->getId()
) {
    foreach ($groupCollection as $group) {
        $this->run("
            INSERT INTO `{$this->getTable('ampgrid/grid_group_column')}`
              (`column_id`, `group_id`, `custom_title`, `is_editable`, `is_visible`, `is_display_totals`)
              VALUES ({$column->getId()}, {$group->getId()}, 'Products With Assigned Images', 0, 1, 0);
        ");
    }
}

$this->endSetup();
