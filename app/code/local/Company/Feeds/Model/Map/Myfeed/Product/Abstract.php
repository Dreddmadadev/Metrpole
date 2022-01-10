<?php

/**
 * Class Company_Feeds_Model_Map_Myfeed_Product_Abstract
 * This class will apply to all product types
 */
class Company_Feeds_Model_Map_Myfeed_Product_Abstract
    extends RocketWeb_ShoppingFeeds_Model_Map_Generic_Product_Abstract
{

    /**
     * @param array $params
     * @return string
     */
    public function mapDirectiveMyDirective($params = array())
    {
        $product = $this->getAdapter()->getProduct();

        if ($params['map']['param']) {
            // if param is Yes
            $cell = 'My param is Yes';
        }
        else {
            $cell = 'My param is No';
        }

        return $this->getAdapter()->cleanField($cell, $params);
    }

}