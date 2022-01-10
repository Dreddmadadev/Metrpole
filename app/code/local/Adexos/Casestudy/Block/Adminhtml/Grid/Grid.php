<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */


class Adexos_Casestudy_Block_Adminhtml_Grid_Grid extends Mage_Adminhtml_Block_Widget_Grid {

    public function __construct()
    {
        parent::__construct();
        $this->setId('grid_id');
        $this->setDefaultSort('id');
        $this->setDefaultDir('asc');
        $this->setSaveParametersInSession(true);
    }

    protected function _prepareCollection()
    {
        $collection = Mage::getModel('adexos_casestudy/casestudy')->getCollection();
        $this->setCollection($collection);
        return parent::_prepareCollection();
    }

    protected function _prepareColumns()
    {

        $this->addColumn('id',
            array(
                'header'=> $this->__('ID'),
                'width' => '50px',
                'index' => 'id'
            )
        );
        $this->addColumn('title',
            array(
                'header'=> $this->__('Title'),
                'width' => '200px',
                'index' => 'title'
            )
        );
        $this->addColumn('image',
            array(
                'header'=> $this->__('Image'),
                'width' => '200px',
                'index' => 'image'
            )
        );
        $this->addColumn('description',
            array(
                'header'=> $this->__('Content'),
                'index' => 'description'
            )
        );

                $this->addExportType('*/*/exportCsv', $this->__('CSV'));
        
                $this->addExportType('*/*/exportExcel', $this->__('Excel XML'));
        
        return parent::_prepareColumns();
    }

    public function getRowUrl($row)
    {
       return $this->getUrl('*/*/edit', array('id' => $row->getId()));
    }

    protected function _prepareMassaction()
    {
        $modelPk = Mage::getModel('adexos_casestudy/casestudy')->getResource()->getIdFieldName();
        $this->setMassactionIdField($modelPk);
        $this->getMassactionBlock()->setFormFieldName('ids');
        // $this->getMassactionBlock()->setUseSelectAll(false);
        $this->getMassactionBlock()->addItem('delete', array(
             'label'=> $this->__('Delete'),
             'url'  => $this->getUrl('*/*/massDelete'),
        ));
        return $this;
    }
    }
