<?php
/**
 *
 * CART2QUOTE CONFIDENTIAL
 * __________________
 *
 *  [2009] - [2019] Cart2Quote B.V.
 *  All Rights Reserved.
 *
 * NOTICE OF LICENSE
 *
 * All information contained herein is, and remains
 * the property of Cart2Quote B.V. and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Cart2Quote B.V.
 * and its suppliers and may be covered by European and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Cart2Quote B.V.
 *
 * @category    Ophirah
 * @package     Qquoteadv
 * @copyright   Copyright (c) 2019 Cart2Quote B.V. (https://www.cart2quote.com)
 * @license     http://www.cart2quote.com/ordering-licenses
 */

/**
 * Class Ophirah_Qquoteadv_Block_Qquoteadv_View_Attachments
 */
class Ophirah_Qquoteadv_Block_Qquoteadv_View_Attachments extends Ophirah_Qquoteadv_Block_Qquoteadv_View
{
    /**
     * @return mixed
     */
    public function getFileUploadsToHtml(){
        $quote = $this->getQuoteData();
        return $quote->getFileUploadsToHtml();
    }
}
