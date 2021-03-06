<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Optimization
 */


class Amasty_Optimization_Model_Config_Source_Image_Gif
{
    public function toOptionArray()
    {
        $hlp = Mage::helper('amoptimization');

        return array(
            array(
                'value' => 'NOTHING',
                'label' => $hlp->__('Do not optimize')
            ),
            array(
                'value' => 'GIFSICLE',
                'label' => $hlp->__('Gifsicle tool')
            )
        );
    }
}
