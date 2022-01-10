<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */


$installer = $this;

$installer->startSetup();

$this->addAttribute('catalog_product', 'technique_file1', array(
    'label'             => 'Fiche Technique numéro 1',
    'type'              => 'varchar',
    'input'             => 'image',
    'backend'           => 'adexos_product/category_attribute_backend_file',
    'class'             => '',
    'source'            => '',
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
    'position'          => 20
));

$this->addAttribute('catalog_product', 'technique_file2', array(
    'label'             => 'Fiche Technique numéro 2',
    'type'              => 'varchar',
    'input'             => 'image',
    'backend'           => 'adexos_product/category_attribute_backend_file',
    'class'             => '',
    'source'            => '',
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
    'position'          => 20
));


$installer->endSetup();