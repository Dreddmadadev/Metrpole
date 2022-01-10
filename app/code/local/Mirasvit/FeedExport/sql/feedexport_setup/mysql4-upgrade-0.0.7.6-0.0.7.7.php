<?php
/**
 * Mirasvit
 *
 * This source file is subject to the Mirasvit Software License, which is available at https://mirasvit.com/license/.
 * Do not edit or add to this file if you wish to upgrade the to newer versions in the future.
 * If you wish to customize this module for your needs.
 * Please refer to http://www.magentocommerce.com for more information.
 *
 * @category  Mirasvit
 * @package   mirasvit/extension_feedexport
 * @version   1.1.24
 * @copyright Copyright (C) 2019 Mirasvit (https://mirasvit.com/)
 */



$installer = $this;
$installer->startSetup();

$this->getConnection()->addColumn(
	$this->getTable('feedexport/feed'),
	'product_cnt',
	array(
		'type' 		=> Varien_Db_Ddl_Table::TYPE_INTEGER,
		'length'    => 11,
		'nullable'	=> true,
		'comment'	=> 'Products Count'
	)
);

$this->getConnection()->addColumn(
	$this->getTable('feedexport/feed'),
	'category_cnt',
	array(
		'type' 		=> Varien_Db_Ddl_Table::TYPE_INTEGER,
		'length'    => 11,
		'nullable'	=> true,
		'comment'	=> 'Categories Count'
	)
);

$this->getConnection()->addColumn(
	$this->getTable('feedexport/feed'),
	'review_cnt',
	array(
		'type' 		=> Varien_Db_Ddl_Table::TYPE_INTEGER,
		'length'    => 11,
		'nullable'	=> true,
		'comment'	=> 'Reviews Count'
	)
);

$installer->getConnection()->resetDdlCache();
$installer->endSetup();


$feeds = Mage::getModel('feedexport/feed')->getCollection();

foreach ($feeds as $feed) {
	if ($feed->getType() != 'xml' || strpos($feed['format'], 'type="product"')){
		$feed->setProductCnt($feed->getGeneratedCnt());
	} else {
	    $feed->setReviewCnt($feed->getGeneratedCnt());
    }
    $feed->save();
}

$installer = $this;
$installer->startSetup();

$this->getConnection()->dropColumn(
	$this->getTable('feedexport/feed'),
	'generated_cnt'
);

$installer->getConnection()->resetDdlCache();
$installer->endSetup();