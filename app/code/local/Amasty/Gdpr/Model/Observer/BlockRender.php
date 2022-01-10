<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Observer_BlockRender
{
    public function execute(Varien_Object $observer)
    {
        /** @var Mage_Core_Block_Abstract $block */
        $block = $observer->getData('block');
        $transport = $observer->getTransport();

        $version = Mage::helper('amgdpr')->getEeMageVersion('1.5.1.0');
        if (version_compare(Mage::getVersion(), $version, '>=')
            && $transport
        ) {
            if (Mage::getStoreConfig('amgdpr/cookie_policy/enabled')
                && $notificationText = Mage::getStoreConfig('amgdpr/cookie_policy/notification_text')
            ) {
                $pattern = '';
                $html = $transport->getHtml();

                $versionFrom = Mage::helper('amgdpr')->getEeMageVersion('1.7.0.0');
                $versionTo = Mage::helper('amgdpr')->getEeMageVersion('1.8.1.0');
                if (version_compare(Mage::getVersion(), $versionFrom, '>=')
                    && version_compare(Mage::getVersion(), $versionTo, '<')
                    && is_a($block, 'Mage_Page_Block_Html_Notices')
                ) {
                    $pattern = '@<div.*?notice-cookie.*?(<p>.*?</p>)@s';
                }

                if (version_compare(Mage::getVersion(), $versionTo, '>=')
                    && is_a($block, 'Mage_Page_Block_Html_CookieNotice')
                ) {
                    $pattern = '@<div.*?notice-text.*?(<p>.*?</p>)@s';
                }

                if ($pattern && $html) {
                    preg_match($pattern, $html, $matches);
                    if (isset($matches[1])) {
                        $transport->setHtml(
                            str_replace($matches[1], $notificationText, $html)
                        );
                    }
                }
            }

            $agreementsBlockClass = Mage::getConfig()->getBlockClassName('checkout/agreements');
            if ((is_a($block, $agreementsBlockClass)
                || is_a($block, 'Smartwave_OnepageCheckout_Block_Agreements')
                || is_a($block, 'Clarion_OnestepCheckout_Block_Agreements')
                || is_a($block, 'TypoStores_OneStepCheckout_Block_Checkout_Agreements')
                ) && 'Mage_Customer' != Mage::app()->getRequest()->getControllerModule()
            ) {
                if (is_a($block, 'TypoStores_OneStepCheckout_Block_Checkout_Agreements')) {
                    $checkboxBlock = $block->getLayout()->createBlock('amgdpr/checkbox_checkout_typostores');
                } else {
                    $checkboxBlock = $block->getLayout()->createBlock('amgdpr/checkbox_checkout');
                }

                $transport->setHtml(
                    $transport->getHtml() . $checkboxBlock->toHtml()
                );
            }

            $customerFormRegisterBlockClass = Mage::getConfig()->getBlockClassName('customer/form_register');
            if (is_a($block, $customerFormRegisterBlockClass)) {
                $checkboxBlock = $block->getLayout()->createBlock('amgdpr/checkbox_customer');
                $html = $transport->getHtml();
                $pos = strripos($html, '</li>');
                $html = substr_replace($html, '</li>' . $checkboxBlock->toHtml(), $pos, 5);
                $transport->setHtml($html);
            }

            $guestAnonymizationBlockClass = Mage::getConfig()->getBlockClassName('sales/order_info');
            if (is_a($block, $guestAnonymizationBlockClass)) {
               $buttonBlock = $block->getLayout()->createBlock('amgdpr/guest');
               $html = $transport->getHtml() . $buttonBlock->toHtml();
               Mage::getModel('customer/session')->setData('amasty_current_order', Mage::registry('current_order')->getIncrementId());
               $transport->setHtml($html);
            }

            $contactUsBlockClass = Mage::getConfig()->getBlockClassName('core/template/contacts_form');
            if (is_a($block, $contactUsBlockClass) && ($block->getTemplate() == 'contacts/form.phtml')) {
                $checkboxBlock = $block->getLayout()->createBlock('amgdpr/checkbox_contact');
                $html = $transport->getHtml();
                $pos = strripos($html, '</li>');
                $html = substr_replace($html, '</li>' . $checkboxBlock->toHtml(), $pos, 5);
                $transport->setHtml($html);
            }

            $newsletterBlockClass = Mage::getConfig()->getBlockClassName('newsletter/subscribe');
            if (is_a($block, $newsletterBlockClass)) {
                $checkboxBlock = $block->getLayout()->createBlock('amgdpr/checkbox_newsletter');
                $html = $transport->getHtml();
                $pos = strripos($html, '</form>');

                if (false !== $pos) {
                    $endOfHtml = substr($html, $pos);
                    $html = substr_replace($html, $checkboxBlock->toHtml(), $pos) . $endOfHtml;
                }

                $transport->setHtml($html);
            }

            $html = $transport->getHtml();
            $customerId = Mage::getSingleton('customer/session')->getCustomerId();
            $activeCustomer = Mage::getModel('amgdpr/consentLog')->getActiveCustomer($customerId);
            if ($activeCustomer && false !== strpos($html, 'amprivacy-checkbox')) {
                $doc = new DOMDocument();
                $doc->preserveWhiteSpace = false;
                $doc->loadHTML($html);
                $gdprBlock = $doc->getElementById('amprivacy-checkbox');
                $gdprBlock->parentNode->removeChild($gdprBlock);
                $html = $doc->saveHTML();
                $pos = strpos($html, '<body>');
                $html = substr_replace($html, '', 0, $pos);
                $html = str_replace('<body>', '', $html);
                $html = str_replace('</body>', '', $html);
                $html = str_replace('</html>', '', $html);
                $transport->setHtml($html);
            }
        }
    }

    public function toHtmlBefore(Varien_Object $observer)
    {
        $block = $observer->getBlock();
        $customerAccountNavigationClass = Mage::getConfig()->getBlockClassName('customer/account_navigation');
        if (is_a($block, $customerAccountNavigationClass)) {
            $block->addLink('amgdpr_customer_settings', 'amgdpr/customer/settings', Mage::helper('amgdpr')->__('Privacy Settings'));
        }
    }
}
