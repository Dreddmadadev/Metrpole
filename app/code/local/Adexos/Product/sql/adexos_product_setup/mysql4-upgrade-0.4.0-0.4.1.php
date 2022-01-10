<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */


$installer = $this;

$installer->startSetup();

$attributes = array(
    "supplier" => "Fournisseur",
    "delivery" => "Délai de livraison"
);

foreach ($attributes as $code => $label){
    $installer->addAttribute('catalog_product', $code, array(
        'type'              => 'varchar',
        'backend'           => '',
        'frontend'          => '',
        'label'             => $label,
        'input'             => 'text',
        'global'            => 0,
        'visible'           => 1,
        'required'          => 0,
        'user_defined'      => 1,
        'default'           => 0,
        'searchable'        => 0,
        'filterable'        => 0,
        'comparable'        => 0,
        'visible_on_front'  => 1,
        'unique'            => 0,
        'used_in_product_listing' => 1,
        'sort_order'        => 30,
        'group'             => 'General'
    ));
}


$installer->endSetup();