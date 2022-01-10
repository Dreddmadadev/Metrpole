<?php
/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 27/02/18
 * Time: 18:51
 */
class Adexos_Homeslider_Block_Slide_Grid extends Mage_Adminhtml_Block_Widget_Grid {

    public function __construct()
    {
        parent::__construct();
        $this->setId('grid_id');
        // $this->setDefaultSort('COLUMN_ID');
        $this->setDefaultDir('asc');
        $this->setSaveParametersInSession(true);
    }

    protected function _prepareCollection()
    {
        $collection = Mage::getModel('adexos_homeslider/slide')->getCollection();
        $this->setCollection($collection);
        return parent::_prepareCollection();
    }

    protected function _prepareColumns()
    {

        $this->addColumn('id',
            array(
                'header'=> $this->__('id'),
                'index' => 'slider_id'
            )
        );
        $this->addColumn('title',
            array(
                'header'=> $this->__('Title'),
                'index' => 'title'
            )
        );
        $this->addColumn('link',
            array(
                'header'=> $this->__('link'),
                'index' => 'link'
            )
        );

        $this->addColumn('image',
            array(
                'header'=> $this->__('image'),
                'index' => 'image'
            )
        );
        $this->addColumn('content',
            array(
                'header'=> $this->__('Contenu'),
                'index' => 'content'
            )
        );
        $this->addColumn('order',
            array(
                'header'=> $this->__('Ordre'),
                'index' => 'order'
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
        $modelPk = Mage::getModel('adexos_homeslider/slide')->getResource()->getIdFieldName();
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
