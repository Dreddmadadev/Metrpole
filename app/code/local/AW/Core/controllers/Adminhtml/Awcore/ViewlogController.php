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

class AW_Core_Adminhtml_Awcore_ViewlogController extends Mage_Adminhtml_Controller_Action {
    public function indexAction() {
	$this
		->loadLayout()
		->_addContent($this->getLayout()->createBlock('awcore/adminhtml_log'))
		->renderLayout();
    }
    /**
     * Clears all records in log table
     * @return AW_Core_ViewlogController
     */
    public function clearAction() {
	try {
	    Mage::getResourceSingleton('awcore/logger')->truncateAll();
	    Mage::getSingleton('adminhtml/session')->addSuccess("Log successfully cleared");
	    $this->_redirect('*/*');

	}catch(Mage_Core_Exception $E) {
	    Mage::getSingleton('adminhtml/session')->addError($E->getMessage());
	    $this->_redirectReferer();
	}
	return $this;
    }

}