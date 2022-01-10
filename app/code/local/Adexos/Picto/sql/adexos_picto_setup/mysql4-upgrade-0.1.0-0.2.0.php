<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */


/* @var $installer Mage_Core_Model_Resource_Setup */
$installer = $this;

$installer->startSetup();

$table = $installer->getConnection()
    ->newTable($installer->getTable('picto'))
    ->addColumn('picto_id', Varien_Db_Ddl_Table::TYPE_INTEGER, null, array(
        'identity' => true,
        'unsigned' => true,
        'nullable' => false,
        'primary' => true,
    ), 'Id')
    ->addColumn('name', Varien_Db_Ddl_Table::TYPE_VARCHAR, null, array(
        'nullable' => false,
    ), 'Title')
    ->addColumn('image', Varien_Db_Ddl_Table::TYPE_VARCHAR, null, array(
        'nullable' => true,
    ), 'Image');

$installer->getConnection()->createTable($table);

$installer->endSetup();