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

/** @var Ophirah_Qquoteadv_Model_Mysql4_Setup $this */
$installer = $this;
$installer->startSetup();

$quoteAddressTable = 'quoteadv_quote_address';
$tableName = $installer->getTable($quoteAddressTable);
$columns = array(
    'vat_id' => array(
        'type' => Varien_Db_Ddl_Table::TYPE_TEXT,
        'length' => 255,
        'comment' => 'Vat Id'
    ),
    'vat_is_valid' => array(
        'type' => Varien_Db_Ddl_Table::TYPE_SMALLINT,
        'length' => 6,
        'comment' => 'Vat Is Valid'
    ),
    'vat_request_id' => array(
        'type' => Varien_Db_Ddl_Table::TYPE_TEXT,
        'length' => 255,
        'comment' => 'Vat Request Id'
    ),
    'vat_request_date' => array(
        'type' => Varien_Db_Ddl_Table::TYPE_TEXT,
        'length' => 255,
        'comment' => 'Vat Request Date'
    ),
    'vat_request_success' => array(
        'type' => Varien_Db_Ddl_Table::TYPE_SMALLINT,
        'length' => 6,
        'comment' => 'Vat Request Success'
    ),
);

foreach($columns as $columnName => $columnDefinition){
    if (!$installer->getConnection()->addColumn($tableName, $columnName, $columnDefinition)) {
        $message = 'Error modifying column '.$columnName.' to table '.$tableName.': Column does already exist';
        Mage::log('Exception: ' .$message, null, 'c2q_exception.log', true);
    }
}

$installer->endSetup();
