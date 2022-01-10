<?php
/**
 * Created by PhpStorm.
 * User: julienpineau
 * Date: 04/12/18
 * Time: 10:13
 */ 
class Adexos_CustomCaptcha_Helper_Data extends Mage_Core_Helper_Abstract {
    public function controlCaptcha($storeConfig, $response) {
        // Google captcha
        $secret   = Mage::getStoreConfig('captcha_configuration/' . $storeConfig . '/key');
        $remoteip = $_SERVER['REMOTE_ADDR'];
        $api_url  = "https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$response."&remoteip=".$remoteip;
        $decode = json_decode(file_get_contents($api_url), true);

        return $decode['success'];
    }
}
