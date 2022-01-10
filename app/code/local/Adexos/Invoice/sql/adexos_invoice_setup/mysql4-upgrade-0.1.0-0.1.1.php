<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

$installer = $this;
$installer->startSetup();

Mage::getConfig()->saveConfig('carriers/flatrate/price', '9.90');

$address = 'Metropole  Equipements - 34 RUE AMPERE - 95300 ENNERY';
Mage::getConfig()->saveConfig('payment/checkmo/mailing_address', $address);

$installer->endSetup();
