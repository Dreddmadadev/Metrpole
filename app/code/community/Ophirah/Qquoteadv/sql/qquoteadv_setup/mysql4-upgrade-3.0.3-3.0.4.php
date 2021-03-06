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

//DROP TABLE IF EXISTS `{$installer->getTable('quoteadv_rotation')}`;
if(!$installer->tableExists($installer->getTable('quoteadv_rotation'))) {
    $installer->run("
        CREATE TABLE `{$installer->getTable('quoteadv_rotation')}` (
            `rotation_id` int(10) unsigned NOT NULL auto_increment,
            `user_id` int(10) unsigned NOT NULL,
            `role_id` int(10) unsigned NOT NULL,
            `created_at` datetime NOT NULL default '0000-00-00 00:00:00',
            `updated_at` datetime NOT NULL default '0000-00-00 00:00:00',
            PRIMARY KEY  (`rotation_id`)
        ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='Quotes';

        ALTER TABLE `{$installer->getTable('quoteadv_rotation')}`
        ADD CONSTRAINT `FK_ quoteadv_rotation_user_id` FOREIGN KEY (`user_id`) REFERENCES `{$installer->getTable('admin/user')}` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
        ADD CONSTRAINT `FK_ quoteadv_rotation_role_id` FOREIGN KEY (`role_id`) REFERENCES `{$installer->getTable('admin/role')}` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;
        ");
}

$installer->endSetup();
