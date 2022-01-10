<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_GuestController extends Mage_Core_Controller_Front_Action
{
    public function anonymiseAction()
    {
        try {
            $orderIncrementId = Mage::getSingleton('customer/session')->getData('amasty_current_order');
            Mage::getSingleton('customer/session')->unsetData('amasty_current_order');
            $order = Mage::getModel('sales/order')->loadByIncrementId($orderIncrementId);

            if ($order->getId()) {
                $allowedAnonymization = true;
                if (Mage::getStoreConfig('amgdpr/general/avoid_anonymisation')) {
                    $statuses = Mage::getStoreConfig('amgdpr/general/statuses');
                    if (in_array($order->getStatus(), explode(',', $statuses))) {
                        $allowedAnonymization = false;
                        Mage::getSingleton('core/session')->addError(
                            $this->__('We are sorry, but currently we can not anonymize your order, because it is not completed yet.')
                        );
                    }
                }

                if ($allowedAnonymization) {
                    Mage::getSingleton('amgdpr/anonymizeModel')->anonymizeSaleData($order);
                    Mage::getSingleton('core/session')->addSuccess($this->__('Anonymisation was successful'));
                }
            }
        } catch (Exception $exception) {
            Mage::getSingleton('core/session')->addError($this->__('An error has occurred'));
            Mage::logException($exception);
        }

        $this->_redirect('sales/guest/form/');
    }
}
