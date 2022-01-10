<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

$installer = $this;
$installer->startSetup();

$promo = Mage::getModel('catalog/category')
    ->getCollection()
    ->addAttributeToFilter('url_key', 'promotions')
    ->getFirstItem();

if (!$promo->isEmpty()) {
    $promo->setName('Promos');
    $promo->save();
}

$innov = Mage::getModel('catalog/category')
    ->getCollection()
    ->addAttributeToFilter('name', 'Innovations & Smart City')
    ->getFirstItem();

if (!$innov->isEmpty()) {
    $innov->setDescription('Vous trouverez dans cette rubrique les dernières innovations les plus prometteuses en matière de mobilier urbain et d\'équipements pour collectivités.');
    $innov->setCustomLayoutUpdate('
<reference name="head">
    <action method="addCss"><stylesheet>css/slick/slick.css</stylesheet></action>
    <action method="addCss"><stylesheet>css/innovation.css</stylesheet></action>
    <action method="addItem"><type>skin_js</type><name>js/slick/slick.min.js</name><params/></action>
    <action method="addItem"><type>skin_js</type><name>js/innov.js</name><params/></action>
</reference>
<reference name="content">
        <block type="catalog/category_view" name="category.innovation" template="catalog/category/innovation.phtml" />
</reference>
');

    $innov->save();
}

$installer->endSetup();