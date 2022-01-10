<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */ 
/* @var $installer Mage_Core_Model_Resource_Setup */
$installer = $this;

$installer->startSetup();

$installer->run("UPDATE `core_config_data` SET `value` = 'global_messages,messages,global_notices,global_cookie_notice,right.reports.product.viewed,cart_header, header-no-cache' WHERE `core_config_data`.`path` = 'system/fpc/dynamic_blocks';");

$installer->endSetup();