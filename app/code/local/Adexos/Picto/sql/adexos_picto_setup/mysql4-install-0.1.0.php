<?php
/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 16/03/18
 * Time: 16:49
 */
/* @var $installer Mage_Core_Model_Resource_Setup */
$installer = $this;

$installer->startSetup();

$installer->addAttribute('catalog_product', 'picto', array(
    'type'              => 'text',
    'label'             => 'Picto',
    'input'             => 'multiselect',
    'backend' => 'eav/entity_attribute_backend_array',
    'source'            => 'adexos_picto/source_picto',
    'global'            => Mage_Catalog_Model_Resource_Eav_Attribute::SCOPE_GLOBAL,
    'visible'           => true,
    'required'          => false,
    'user_defined'      => true,
    'default'           => '',
    'searchable'        => false,
    'filterable'        => false,
    'comparable'        => false,
    'visible_on_front'  => true,
    'unique'            => false,
    'group'             => 'General',
    'note' => 'Press \'Ctrl\' for multiple selection'
    ));

$installer->endSetup();