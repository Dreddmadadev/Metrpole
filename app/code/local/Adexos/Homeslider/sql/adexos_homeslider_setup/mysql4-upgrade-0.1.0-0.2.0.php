<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */


$installer = $this;

$installer->startSetup();

$installer->getConnection()
    ->addColumn($installer->getTable('homeslider'),'order', array(
        'type'      => Varien_Db_Ddl_Table::TYPE_INTEGER,
        'nullable'  => false,
        'length'    => 11,
        'comment'   => 'Order of the slide'
    ));
$installer->getConnection()
    ->addColumn($installer->getTable('homeslider'),'disabled', array(
        'type'      => Varien_Db_Ddl_Table::TYPE_INTEGER,
        'nullable'  => false,
        'length'    => 2,
        'comment'   => 'Disabled a slide'
    ));


$installer->endSetup();