<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


$userIdColumn = 'int(10) unsigned DEFAULT NULL';
$version = Mage::helper('amgdpr')->getEeMageVersion('1.6.0.0');
if (version_compare(Mage::getVersion(), $version, '<')) {
    $userIdColumn = 'mediumint(9) unsigned DEFAULT NULL';
}

$installer = $this;
$this->startSetup();

$installer->run("
CREATE TABLE `{$this->getTable('amgdpr/deleteRequest')}` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Id',
 `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Date of logging',
 `customer_id` int(10) unsigned NOT NULL COMMENT 'Customer Id',
 `customer_name` varchar(127) NOT NULL COMMENT 'Customer Name',
 `customer_email` varchar(127) NOT NULL COMMENT 'Customer Email',
 PRIMARY KEY (`id`),
 KEY `FK_AMASTY_GDPR_DELETE_REQUEST_CSTR_ID_CSTR_ENTT_ENTT_ID` (`customer_id`),
 CONSTRAINT `FK_AMASTY_GDPR_DELETE_REQUEST_CSTR_ID_CSTR_ENTT_ENTT_ID` FOREIGN KEY (`customer_id`) REFERENCES `{$this->getTable('customer/entity')}` (`entity_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='amasty_gdpr_delete_request';

CREATE TABLE `{$this->getTable('amgdpr/consentLog')}` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Id',
 `customer_id` int(10) unsigned NOT NULL COMMENT 'Customer Id',
 `date_consented` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Date of consent',
 `policy_version` varchar(255) NOT NULL DEFAULT '' COMMENT 'Policy version',
 PRIMARY KEY (`id`),
 KEY `FK_AMASTY_GDPR_CONSENT_LOG_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID` (`customer_id`),
 CONSTRAINT `FK_AMASTY_GDPR_CONSENT_LOG_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID` FOREIGN KEY (`customer_id`) REFERENCES `{$this->getTable('customer/entity')}` (`entity_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='amasty_gdpr_consent_log';

CREATE TABLE `{$this->getTable('amgdpr/privacyPolicy')}` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Id',
 `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Date of creating',
 `policy_version` varchar(10) NOT NULL DEFAULT '' COMMENT 'Policy Version',
 `content` text NOT NULL COMMENT 'Policy Content',
 `date_last_edited` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'Date of last editing',
 `last_edited_by` {$userIdColumn},
 `comment` varchar(255) NOT NULL DEFAULT '' COMMENT 'Comment',
 `status` smallint(6) NOT NULL DEFAULT '0' COMMENT 'Status',
 PRIMARY KEY (`id`),
 KEY `FK_AMASTY_GDPR_PRIVACY_POLICY_LAST_EDITED_BY_ADMIN_USER_USER_ID` (`last_edited_by`),
 CONSTRAINT `FK_AMASTY_GDPR_PRIVACY_POLICY_LAST_EDITED_BY_ADMIN_USER_USER_ID` FOREIGN KEY (`last_edited_by`) REFERENCES `{$this->getTable('admin/user')}` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='amasty_gdpr_privacy_policy';

CREATE TABLE `{$this->getTable('amgdpr/policyContent')}` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Id',
 `policy_id` int(10) unsigned NOT NULL,
 `store_id` smallint(5) unsigned NOT NULL,
 `content` text NOT NULL COMMENT 'Policy Content',
 PRIMARY KEY (`id`),
 KEY `FK_AMASTY_GDPR_PRIVACY_POLICY_CONTENT_TO_POLICY_ID` (`policy_id`),
 KEY `FK_AMASTY_GDPR_PRIVACY_POLICY_CONTENT_TO_STORE_ID` (`store_id`),
 CONSTRAINT `FK_AMASTY_GDPR_PRIVACY_POLICY_CONTENT_TO_POLICY_ID` FOREIGN KEY (`policy_id`) REFERENCES `{$this->getTable('amgdpr/privacyPolicy')}` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
 CONSTRAINT `FK_AMASTY_GDPR_PRIVACY_POLICY_CONTENT_TO_STORE_ID` FOREIGN KEY (`store_id`) REFERENCES `{$this->getTable('core/store')}` (`store_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='amasty_gdpr_privacy_policy_content';

CREATE TABLE `{$this->getTable('amgdpr/consentQueue')}` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Id',
 `customer_id` int(10) unsigned NOT NULL COMMENT 'Customer Id',
 `status` smallint(6) NOT NULL DEFAULT '0' COMMENT 'Status',
 PRIMARY KEY (`id`),
 UNIQUE KEY `UNQ_AMASTY_GDPR_CONSENT_QUEUE_CUSTOMER_ID` (`customer_id`),
 CONSTRAINT `FK_AMASTY_GDPR_CONSENT_QUEUE_CSTR_ID_CSTR_ENTT_ENTT_ID` FOREIGN KEY (`customer_id`) REFERENCES `{$this->getTable('customer/entity')}` (`entity_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='amasty_gdpr_consent_queue';

CREATE TABLE `{$this->getTable('amgdpr/actionLog')}` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Id',
 `customer_id` int(10) unsigned DEFAULT NULL COMMENT 'Customer Id',
 `ip` varchar(127) NOT NULL COMMENT 'Remote Ip Address',
 `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Date of logging',
 `action` varchar(255) NOT NULL COMMENT 'Performed Action',
 PRIMARY KEY (`id`),
 KEY `FK_AMASTY_GDPR_ACTION_LOG_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID` (`customer_id`),
 CONSTRAINT `FK_AMASTY_GDPR_ACTION_LOG_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID` FOREIGN KEY (`customer_id`) REFERENCES `{$this->getTable('customer/entity')}` (`entity_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='amasty_gdpr_action_log';
");

$this->endSetup();
