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

class AW_Core_Exception extends Mage_Core_Exception {
    /**
     * @deprecated
     * @static
     * @var mixed
     */
    protected static $_log;
    
    public function __construct($message, $details='', $level=1, $module='') {
	Mage::helper('awcore/logger')->log($this, $message, AW_Core_Model_Logger::LOG_SEVERITY_WARNING, $details, $this->getLine());
	return parent::__construct($message);
    }
}