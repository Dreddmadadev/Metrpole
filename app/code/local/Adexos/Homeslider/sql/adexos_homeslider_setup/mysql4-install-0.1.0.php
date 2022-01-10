<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

 
/* @var $installer Mage_Core_Model_Resource_Setup */
$installer = $this;

$installer->startSetup();

$table = $installer->getConnection()
    ->newTable($installer->getTable('homeslider'))
    ->addColumn('slider_id', Varien_Db_Ddl_Table::TYPE_INTEGER, null, array(
        'identity'  => true,
        'unsigned'  => true,
        'nullable'  => false,
        'primary'   => true,
    ), 'Id')
    ->addColumn('title',Varien_Db_Ddl_Table::TYPE_VARCHAR, null, array(
        'nullable'  => false,
    ), 'Title')
    ->addColumn('content',Varien_Db_Ddl_Table::TYPE_VARCHAR, null, array(
        'nullable'  => false,
    ), 'Content')
    ->addColumn('image',Varien_Db_Ddl_Table::TYPE_VARCHAR, null, array(
        'nullable'  => true,
    ), 'Image')
    ->addColumn('link',Varien_Db_Ddl_Table::TYPE_VARCHAR, null, array(
        'nullable'  => true,
    ), 'Link');

$installer->getConnection()->createTable($table);

$installer->endSetup();