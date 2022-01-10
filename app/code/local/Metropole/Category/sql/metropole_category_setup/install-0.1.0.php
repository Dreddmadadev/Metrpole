<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */ 
/* @var $installer Mage_Core_Model_Resource_Setup */
$installer = $this;

$installer->startSetup();

$parentId = 2;// Any of your parent category
$category = Mage::getModel('catalog/category');
$category->setName('Innovations & Smart City');
$category->setUrlKey('innovations-smart-city');
$category->setIsActive(1); // to make active
$category->setIncludeInMenu(0);
$category->setDisplayMode('PAGE');
$category->setPageLayout('one_column');
$category->setIsAnchor(1); // This is for active anchor
$category->setStoreId(Mage::app()->getStore()->getId());
$category->setCustomLayoutUpdate('
<reference name="head">
         <action method="addCss"><stylesheet>css/innovation.css</stylesheet></action>
</reference>
<reference name="content">
        <block type="catalog/category_view" name="category.innovation" template="catalog/category/innovation.phtml" />
</reference>
');

$parentCategory = Mage::getModel('catalog/category')->load($parentId);
$category->setPath($parentCategory->getPath());
$category->save();

$variable = Mage::getModel('core/variable')
    ->setCode('innovation-custom')
    ->setName('Innovations & Smart City')
    ->setPlainValue('Innovations & Smart City')
    ->save();

$installer->endSetup();