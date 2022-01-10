<?php

/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

class Adexos_Casestudy_Block_Adminhtml_Grid_Edit_Form_Renderer_Fieldset_Product_Grid extends Mage_Adminhtml_Block_Widget_Grid
{

    public function __construct()
    {
        parent::__construct();
        $this->setId('productGrid');
        $this->setUseAjax(true);
        $this->setDefaultSort('entity_id');
        $this->setSaveParametersInSession(true);
    }

    protected function _prepareCollection()
    {
        $collection = Mage::getResourceModel('catalog/product_collection')
            ->addAttributeToSelect('*');

        $this->setCollection($collection);

        return parent::_prepareCollection();
    }

    protected function _prepareColumns()
    {
        $this->addColumn('product_grid', array(
            'header'    => Mage::helper('catalog/product')->__(''),
            'index'     => 'entity_id',
            'type'=>'checkbox',
            'align'     => 'center',
            'filter_condition_callback' => array($this, 'filter_special_price'),
            'renderer'  => 'Adexos_Casestudy_Block_Adminhtml_Grid_Edit_Form_Renderer_Fieldset_Product_Render',
        ));


        $this->addColumn('entity_id', array(
            'header'    => Mage::helper('catalog/product')->__('ID'),

            'index'     => 'entity_id',
            'type'  => 'number',
        ));

        $this->addColumn('name', array(
            'header'    => Mage::helper('catalog/product')->__('Name'),
            'index'     => 'name'
        ));

        $this->addColumn('sku', array(
            'header'    => Mage::helper('catalog/product')->__('sku'),
            'index'     => 'sku'
        ));

        return parent::_prepareColumns();
    }

    public function getGridUrl()
    {
        return $this->getUrl('*/*/gridOnly', array('_current'=>true));
    }

    public function filter_special_price($collection, $column) {
        if($id = $this->getRequest()->getParams()){
            if (!$value = $column->getFilter()->getValue()) {
                return $this;
            }

            $modelP = Mage::getModel('adexos_casestudy/product')->getCollection()
                ->addFieldtoFilter('casestudy_id', $id);

            //get product have casestudy
            $pId = array();
            foreach ($modelP as $p) {
                $pId[] = $p->getProductId();
            }

            $this->getCollection()->addAttributeToFilter('entity_id', array('in' => $pId));

        }
 
        return $this;
 
    }

}