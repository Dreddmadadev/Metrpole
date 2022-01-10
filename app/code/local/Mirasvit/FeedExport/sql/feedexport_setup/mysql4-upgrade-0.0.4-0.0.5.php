<?php
/**
 * Mirasvit
 *
 * This source file is subject to the Mirasvit Software License, which is available at https://mirasvit.com/license/.
 * Do not edit or add to this file if you wish to upgrade the to newer versions in the future.
 * If you wish to customize this module for your needs.
 * Please refer to http://www.magentocommerce.com for more information.
 *
 * @category  Mirasvit
 * @package   mirasvit/extension_feedexport
 * @version   1.1.24
 * @copyright Copyright (C) 2019 Mirasvit (https://mirasvit.com/)
 */


$installer = $this;
$installer->startSetup();

$installer->run("
DROP TABLE IF EXISTS `{$this->getTable('feedexport/mapping_category')}`;
CREATE TABLE {$this->getTable('feedexport/mapping_category')} (
    `mapping_id`            int(11)      unsigned NOT NULL auto_increment,
    `name`                  varchar(255) NOT NULL,
    `type`                  varchar(255) NOT NULL,
    `mapping_serialized`    longtext     NOT NULL,
    `created_at`            datetime     NOT NULL DEFAULT '0000-00-00 00:00:00',
    `updated_at`            datetime     NOT NULL DEFAULT '0000-00-00 00:00:00',
    PRIMARY KEY  (`mapping_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
");

$installer->endSetup();