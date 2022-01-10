<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Helper_Data extends Mage_Core_Helper_Abstract
{
    public function getEeMageVersion($version)
    {
        if (method_exists('Mage', 'getEdition')
            && 'enterprise' == strtolower(Mage::getEdition())
        ) {
            switch ($version) {
                case '1.7.0.0':
                    $version = '1.13.0.1';
                    break;
                case '1.8.1.0':
                    $version = '1.13.1.0';
                    break;
                default:
                    $version = '1.11.0.0';
            }
        }

        return $version;
    }
}
