<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */


$installer = $this;

$installer->startSetup();

$installer->run("
    ALTER TABLE ".$installer->getTable('adexos_casestudy')." CHANGE content description text;

");


$installer->endSetup();