<?php
/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 27/02/18
 * Time: 18:51
 */
class Adexos_Homeslider_Block_Slide extends Mage_Adminhtml_Block_Widget_Grid_Container {

    public function __construct()
    {
        $this->_blockGroup      = 'adexos_homeslider';
        $this->_controller      = 'slide';
        // $this->_headerText      = $this->__('Grid Header Text');
        // $this->_addButtonLabel  = $this->__('Add Button Label');
        parent::__construct();
            }

    public function getCreateUrl()
    {
        return $this->getUrl('*/*/new');
    }

}

