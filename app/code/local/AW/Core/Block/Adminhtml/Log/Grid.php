<?php
/**
 * aheadWorks Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://ecommerce.aheadworks.com/AW-LICENSE.txt
 *
 * =================================================================
 *                 MAGENTO EDITION USAGE NOTICE
 * =================================================================
 * This software is designed to work with Magento community edition and
 * its use on an edition other than specified is prohibited. aheadWorks does not
 * provide extension support in case of incorrect edition use.
 * =================================================================
 *
 * @category   AW
 * @package    AW_Advancednewsletter
 * @version    2.5.1
 * @copyright  Copyright (c) 2010-2012 aheadWorks Co. (http://www.aheadworks.com)
 * @license    http://ecommerce.aheadworks.com/AW-LICENSE.txt
 */

class AW_Core_Block_Adminhtml_Log_Grid extends Mage_Adminhtml_Block_Widget_Grid {
    public function __construct() {
	parent::__construct();
	$this->setId('awcoreLogGrid');
	$this->setDefaultSort('id');
	$this->setDefaultDir('DESC');
	$this->setSaveParametersInSession(true);
    }

    protected function _prepareCollection() {
	$collection = Mage::getModel('awcore/logger')->getCollection();
	$this->setCollection($collection);
	return parent::_prepareCollection();
    }

    protected function _prepareColumns() {
	$this->addColumn('date', array(
		'header'    => Mage::helper('awcore')->__('Date'),
		'align'     =>'right',
		'width'     => '5',
		'index'     => 'date',
		'type'	 => 'datetime'
	));
	$this->addColumn('id', array(
		'header'    => Mage::helper('awcore')->__('ID'),
		'align'     =>'right',
		'width'     => '5',
		'index'     => 'id',
	));

	$this->addColumn('module', array(
		'header'    => Mage::helper('awcore')->__('Module'),
		'align'     =>'left',
		'index'     => 'module',
	));

	$this->addColumn('type', array(
		'header'    => Mage::helper('awcore')->__('Title'),
		'align'     =>'left',
		'index'     => 'title',

	));

	$this->addColumn('content', array(
		'header'    => Mage::helper('awcore')->__('Details'),
		'align'     =>'left',
		'index'     => 'content',

	));

	$this->addColumn('object', array(
		'header'    => Mage::helper('awcore')->__('Object'),
		'align'     =>'left',
		'index'     => 'object',
	));


	$ret = parent::_prepareColumns();


	return $ret;
    }

    public function getRowUrl($row) {
	return false;
    }

}
