<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */


$installer = $this;

$installer->startSetup();

$this->addAttribute('catalog_product', 'skumetro', array(
    'label'             => 'Reference metropole',
    'input'             => 'text',
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
    'position'          => 5
));


$installer->endSetup();