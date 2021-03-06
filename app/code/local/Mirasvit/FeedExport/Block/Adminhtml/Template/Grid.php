<?php
/**
 * Mirasvit
 *
 * This source file is subject to the Mirasvit Software License, which is available at https://mirasvit.com/license/.
 * Do not edit or add to this file if you wish to upgrade the to newer versions in the future.
 * If you wish to customize this module for your needs.
 * Please refer to http://www.magentocommerce.com for more information.
 *
 * @category  Mirasvit
 * @package   mirasvit/extension_feedexport
 * @version   1.1.24
 * @copyright Copyright (C) 2019 Mirasvit (https://mirasvit.com/)
 */


class Mirasvit_FeedExport_Block_Adminhtml_Template_Grid extends Mage_Adminhtml_Block_Widget_Grid
{
    public function __construct()
    {
        parent::__construct();
        $this->setId('feedexport_template_grid');
        $this->setDefaultSort('name');
        $this->setDefaultDir('asc');
        $this->setSaveParametersInSession(true);
    }

    protected function _prepareCollection()
    {
        $collection = Mage::getModel('feedexport/template')->getCollection();

        $this->setCollection($collection);
        return parent::_prepareCollection();
    }

    protected function _prepareColumns()
    {
        $this->addColumn('id', array(
            'header' => Mage::helper('feedexport')->__('ID'),
            'align'  => 'right',
            'width'  => '50px',
            'index'  => 'template_id',
        ));

        $this->addColumn('name', array(
            'header' => Mage::helper('feedexport')->__('Name'),
            'align'  => 'left',
            'index'  => 'name',
        ));

        $this->addColumn('type', array(
            'header' => Mage::helper('feedexport')->__('Type'),
            'align'  => 'left',
            'index'  => 'type',
            'type'   => 'options',
            'options' => array(
                'csv' => Mage::helper('feedexport')->__('CSV'),
                'txt' => Mage::helper('feedexport')->__('TXT'),
                'xml' => Mage::helper('feedexport')->__('XML'),
            ),
        ));

        $this->addColumn('action',
            array(
                'header'  => Mage::helper('feedexport')->__('Action'),
                'width'   => '100',
                'type'    => 'action',
                'getter'  => 'getId',
                'actions' => array(
                    array(
                        'caption' => Mage::helper('feedexport')->__('Export Template'),
                        'url'     => array('base' => '*/*/export'),
                        'field'   => 'id'
                    ),
                    array(
                        'caption' => Mage::helper('feedexport')->__('Edit'),
                        'url'     => array('base' => '*/*/edit'),
                        'field'   => 'id'
                    ),
                    array(
                        'caption' => Mage::helper('feedexport')->__('Remove'),
                        'url'     => array('base' => '*/*/delete'),
                        'field'   => 'id'
                    ),
                ),
                'filter'    => false,
                'sortable'  => false,
                'is_system' => true,
            )
        );

        return parent::_prepareColumns();
    }

    protected function _prepareMassaction()
    {
        $this->setMassactionIdField('id');
        $this->getMassactionBlock()->setFormFieldName('template');

        $this->getMassactionBlock()->addItem('delete', array(
            'label'   => Mage::helper('feedexport')->__('Delete'),
            'url'     => $this->getUrl('*/*/massDelete'),
            'confirm' => Mage::helper('feedexport')->__('Are you sure?')
        ));

        $this->getMassactionBlock()->addItem('export', array(
            'label' => Mage::helper('feedexport')->__('Export'),
            'url'   => $this->getUrl('*/*/massExport')
        ));

        return $this;
    }

    public function getRowUrl($row)
    {
        return $this->getUrl('*/*/edit', array('id' => $row->getId()));
    }

}