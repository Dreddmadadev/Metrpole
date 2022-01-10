<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */


$installer = $this;

$installer->startSetup();

$used_in_form_address = array('customer_register_address','customer_address_edit','adminhtml_customer_address');
$this->addAttribute('customer_address', 'informations', array(
    'label'             => 'Informations',
    'type'              => 'varchar',
    'input'             => 'textarea',
    'position'          => 140,
    'visible'           => true,
    'required'          => false,
    'is_user_defined'   => true,
    'user_defined'      => true
));

Mage::getSingleton('eav/config')
    ->getAttribute('customer_address', 'informations')
    ->setData('used_in_forms', $used_in_form_address)
    ->save();

$used_in_form_customer = array('customer_account_create','customer_account_edit','adminhtml_customer');
$this->addAttribute('customer', 'company', array(
    'label'             => 'Company',
    'type'              => 'varchar',
    'input'             => 'text',
    'position'          => 140,
    'visible'           => true,
    'required'          => false,
    'is_user_defined'   => true,
    'user_defined'      => true,
    'used_in_forms'      => $used_in_form_customer
));

$this->addAttribute('customer', 'siret', array(
    'label'             => 'Siret',
    'type'              => 'varchar',
    'input'             => 'text',
    'position'          => 140,
    'visible'           => true,
    'required'          => false,
    'is_user_defined'   => true,
    'user_defined'      => true,
    'used_in_forms'      => $used_in_form_customer
));

$this->addAttribute('customer', 'eu_vat', array(
    'label'             => 'Eu Vat',
    'type'              => 'varchar',
    'input'             => 'text',
    'position'          => 140,
    'visible'           => true,
    'required'          => false,
    'is_user_defined'   => true,
    'user_defined'      => true,
    'used_in_forms'      => $used_in_form_customer
));

Mage::getSingleton('eav/config')
    ->getAttribute('customer', 'company')
    ->setData('used_in_forms', $used_in_form_customer)
    ->save();

Mage::getSingleton('eav/config')
    ->getAttribute('customer', 'siret')
    ->setData('used_in_forms', $used_in_form_customer)
    ->save();

Mage::getSingleton('eav/config')
    ->getAttribute('customer', 'eu_vat')
    ->setData('used_in_forms', $used_in_form_customer)
    ->save();


$installer->endSetup();