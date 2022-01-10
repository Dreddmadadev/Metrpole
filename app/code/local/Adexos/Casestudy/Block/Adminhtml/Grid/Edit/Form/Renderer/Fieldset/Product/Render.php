<?php
class Adexos_Casestudy_Block_Adminhtml_Grid_Edit_Form_Renderer_Fieldset_Product_Render extends Mage_Adminhtml_Block_Widget_Grid_Column_Renderer_Abstract {
    public function render(Varien_Object $row) { $value =  $row->getData($this->getColumn()->getIndex());
        return '<input test="'.$this->getColumn()->getIndex().'" onclick="checkedSelected(this)" name="" value="'.$value.'" class="checkbox" type="checkbox"><script>checkedInput();</script>';
    }

}