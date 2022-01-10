<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


$version = Mage::helper('amgdpr')->getEeMageVersion('1.9.1.0');
if (version_compare(Mage::getVersion(), $version, '>=')) {
    try {
        $block = Mage::getModel('admin/block');
        if (is_object($block)) {
            $block->load('amgdpr/policy', 'block_name');
            if (!$block->getId()) {
                $block->setData(array(
                    'block_name' => 'amgdpr/policy',
                    'is_allowed' => 1,
                ));
                $block->save();
            }
        }
    } catch (Exception $e) {
        // Operation is not required for previous versions of Magento
    }
}

$this->startSetup();

$this->run("
UPDATE `{$this->getTable('core/config_data')}` SET `path`='amgdpr/deletion_notification/deny_from' WHERE `path`='amgdpr/deletion_notification/from';
UPDATE `{$this->getTable('core/config_data')}` SET `path`='amgdpr/deletion_notification/deny_reply_to' WHERE `path`='amgdpr/deletion_notification/reply_to';
UPDATE `{$this->getTable('core/config_data')}` SET `path`='amgdpr/deletion_notification/deny_template' WHERE `path`='amgdpr/deletion_notification/template';
UPDATE `{$this->getTable('core/config_data')}` SET `value`='amgdpr_deletion_notification_deny_template' WHERE `path`='amgdpr/deletion_notification/deny_template' AND `value`='amgdpr_deletion_notification_template';
");

$this->endSetup();
