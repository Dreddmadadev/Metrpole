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



class Mirasvit_FeedExport_Block_Adminhtml_Dynamic_Attribute_Grid extends Mage_Adminhtml_Block_Widget_Grid
{
    public function __construct()
    {
        parent::__construct();
        $this->setId('feedexport_dynamic_attribute_grid');
        $this->setDefaultSort('name');
        $this->setDefaultDir('asc');
        $this->setSaveParametersInSession(true);
    }

    protected function _prepareCollection()
    {
        $collection = Mage::getModel('feedexport/dynamic_attribute')->getCollection();

        $this->setCollection($collection);

        return parent::_prepareCollection();
    }

    protected function _prepareColumns()
    {
        $this->addColumn('attribute_id', array(
            'header' => Mage::helper('feedexport')->__('ID'),
            'align' => 'right',
            'width' => '50px',
            'index' => 'attribute_id',
        ));

        $this->addColumn('name', array(
            'header' => Mage::helper('feedexport')->__('Name'),
            'align' => 'left',
            'index' => 'name',
        ));

        $this->addColumn('code', array(
            'header' => Mage::helper('feedexport')->__('Attribute Code'),
            'align' => 'left',
            'index' => 'code',
        ));

        $this->addColumn('action',
            array(
                'header' => Mage::helper('feedexport')->__('Action'),
                'width' => '100',
                'type' => 'action',
                'getter' => 'getId',
                'actions' => array(
                    array(
                        'caption' => __('Export'),
                        'url' => array('base' => '*/*/export'),
                        'field' => 'id',
                    ),
                    array(
                        'caption' => __('Edit'),
                        'url' => array('base' => '*/*/edit'),
                        'field' => 'id',
                    ),
                    array(
                        'caption' => Mage::helper('feedexport')->__('Delete'),
                        'url' => array('base' => '*/*/delete'),
                        'field' => 'id',
                    ),
                ),
                'filter' => false,
                'sortable' => false,
                'is_system' => true,
            )
        );

        return parent::_prepareColumns();
    }

    protected function _prepareMassaction()
    {
        $this->setMassactionIdField('attribute_id');
        $this->getMassactionBlock()->setFormFieldName('dynamic_attribute');

        $this->getMassactionBlock()->addItem('delete', array(
            'label' => __('Delete'),
            'url' => $this->getUrl('*/*/massDelete'),
            'confirm' => __('Are you sure?'),
        ));

        $this->getMassactionBlock()->addItem('export', array(
            'label' => __('Export'),
            'url' => $this->getUrl('*/*/massExport'),
        ));

        return $this;
    }

    public function getRowUrl($row)
    {
        return $this->getUrl('*/*/edit', array('id' => $row->getId()));
    }
}
