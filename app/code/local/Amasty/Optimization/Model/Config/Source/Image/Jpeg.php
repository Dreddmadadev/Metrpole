<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Optimization
 */


class Amasty_Optimization_Model_Config_Source_Image_Jpeg
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
                'value' => 'JPEGOPTIM',
                'label' => $hlp->__('Jpegoptim tool 100% quality')
            ),
            array(
                'value' => 'JPEGOPTIM_90',
                'label' => $hlp->__('Jpegoptim tool 90% quality')
            ),
            array(
                'value' => 'JPEGOPTIM_80',
                'label' => $hlp->__('Jpegoptim tool 80% quality')
            ),
        );
    }
}
