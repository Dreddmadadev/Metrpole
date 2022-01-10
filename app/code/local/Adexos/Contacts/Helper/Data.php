<?php

class Adexos_Contacts_Helper_Data extends Mage_Core_Helper_Abstract {

    public function getPhoneNumber()
    {
        return Mage::getStoreConfig('general/store_information/phone');
    }
}
