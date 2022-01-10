<?php
/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 16/03/18
 * Time: 17:26
 */
class Adexos_Picto_Block_Grid extends Mage_Adminhtml_Block_Widget_Grid_Container {

    public function __construct()
    {
        $this->_blockGroup      = 'adexos_picto';
        $this->_controller      = 'grid';
        // $this->_headerText      = $this->__('Grid Header Text');
        // $this->_addButtonLabel  = $this->__('Add Button Label');
        parent::__construct();
            }

    public function getCreateUrl()
    {
        return $this->getUrl('*/*/new');
    }

}

