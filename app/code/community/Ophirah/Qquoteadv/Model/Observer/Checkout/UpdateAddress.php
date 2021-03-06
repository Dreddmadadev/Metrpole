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
 * @license     https://www.cart2quote.com/ordering-licenses
 */

/**
 * Class Ophirah_Qquoteadv_Model_Observer_Checkout_UpdateAddress
 */
class Ophirah_Qquoteadv_Model_Observer_Checkout_UpdateAddress
{
    /**
     * @param Varien_Event_Observer $observer
     */
    public function updateAddress(Varien_Event_Observer $observer)
    {
        if ($observer->getAction()->getFullActionName() === 'checkout_onepage_index') {
            $quote = $observer->getAction()->getOnePage()->getQuote();
            if ($quote->getProposalQuoteId()) {
                $addresses = Mage::helper('qquoteadv/address')->getAddressCollectionArray($quote->getProposalQuoteId());

                $quoteBillingAddress = Mage::helper('qquoteadv/address')->getQuoteAddress(
                    $quote->getCustomerId(),
                    $addresses['billing'],
                    $quote->getStoreId(),
                    Ophirah_Qquoteadv_Helper_Address::ADDRESS_TYPE_BILLING
                );

                if ($quoteBillingAddress) {
                    $quote->setBillingAddress($quoteBillingAddress);
                }

                $quoteShippingAddress = Mage::helper('qquoteadv/address')->getQuoteAddress(
                    $quote->getCustomerId(),
                    $addresses['shipping'],
                    $quote->getStoreId(),
                    Ophirah_Qquoteadv_Helper_Address::ADDRESS_TYPE_SHIPPING
                );

                if ($quoteShippingAddress) {
                    $quote->setShippingAddress($quoteShippingAddress);
                }
            }
        }

        return $this;
    }
}
