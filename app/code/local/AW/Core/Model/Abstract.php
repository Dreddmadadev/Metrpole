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

class AW_Core_Model_Abstract extends Mage_Core_Model_Abstract {

    /** Datetime format accepted by SQL */
    const DB_DATETIME_FORMAT = 'yyyy-MM-dd HH:m:s'; // DON'T use Y(uppercase here)
    /** Date format accepted by SQL */
    const DB_DATE_FORMAT= 'yyyy-MM-dd';
    /** Standard JavaScript format */
    const JS_DATE_FORMAT= 'yyyy-M-d';

    /** Return boolean flag */
    const RETURN_BOOLEAN = 'BOOL';
    /** Return integer flag */
    const RETURN_INTEGER = 'INT';
    /** Return float flag */
    const RETURN_FLOAT = 'FLOAT';
    /** Return string flag */
    const RETURN_STRING = 'STR';
    /** Return array flag */
    const RETURN_ARRAY = 'ARR';
    /** Return object flag */
    const RETURN_OBJECT = 'OBJ';

    /**
     * Logs entry wrapper
     * @param object $message
     * @param object $severity [optional]
     * @return void
     */
    public function log($message, $severity=null, $details='') {
	Mage::helper('awcore/logger')->log($this, $message, $severity, $details);
    }
}