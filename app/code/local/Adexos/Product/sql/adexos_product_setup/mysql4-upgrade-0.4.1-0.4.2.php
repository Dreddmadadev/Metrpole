<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

$this->startSetup();

Mage::getConfig()->saveConfig('catalog/layered_navigation/price_range_calculation', 'manual');
Mage::getConfig()->saveConfig('catalog/layered_navigation/price_range_step', '500');
Mage::getConfig()->saveConfig('catalog/layered_navigation/price_range_max_intervals', '10');

$this->endSetup();