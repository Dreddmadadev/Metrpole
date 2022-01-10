<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */


$installer = $this;

$installer->startSetup();

$installer->run("
    CREATE TABLE `adexos_casestudy_products` (
        `id` int unsigned NOT NULL AUTO_INCREMENT ,
        `casestudy_id` varchar( 255 ) NOT NULL default '',
        `product_id` varchar( 255 ) NOT NULL default '',
        PRIMARY KEY ( `id` )
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

");


$installer->endSetup();