<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Block_Adminhtml_WithoutConsent extends Mage_Adminhtml_Block_Widget_Grid_Container
{
    public function __construct()
    {
        parent::__construct();
        $this->_controller = 'adminhtml_withoutConsent';
        $this->_blockGroup = 'amgdpr';
        $this->_headerText = $this->__('Customers Without Consent');
        $this->_removeButton('add');
    }
}
