<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Pgrid
 */


class Amasty_Pgrid_Block_Adminhtml_Catalog_Product_Grid extends Mage_Adminhtml_Block_Catalog_Product_Grid
{
    protected $_gridAttributes = array();

    protected $_groupId;

    protected $imageExpression = "
        IF((baseimage1.value='no_selection' OR baseimage1.value IS NULL)
        OR (smallimage1.value='no_selection' OR smallimage1.value IS NULL)
        OR (thumbnailimage1.value='no_selection' OR thumbnailimage1.value IS NULL), 0 ,1)";

    public function __construct()
    {
        parent::__construct();
        $this->_exportPageSize = null;
        $this->_countTotals = Mage::getStoreConfig('ampgrid/general/display_totals');
        $this->setTemplate('amasty/ampgrid/grid.phtml');
    }

    protected function _preparePage()
    {
        $this->getCollection()
            ->setPageSize((int) $this->getParam($this->getVarNameLimit(), Mage::getStoreConfig('ampgrid/general/number_of_records')))
            ->setCurPage((int) $this->getParam($this->getVarNamePage(), $this->_defaultPage));
    }

    protected function _prepareLayout()
    {
        parent::_prepareLayout();
        $this->setExportVisibility('true');
        $url = $this->getUrl('adminhtml/ampgrid_attribute/index');
        $this->setChild('attributes_button',
            $this->getLayout()->createBlock('adminhtml/widget_button')
                ->setData(array(
                    'label' => Mage::helper('ampgrid')->__('Grid Attribute Columns'),
                    'onclick' => sprintf("pAttribute.showConfig('%s');", $url),
                    'class' => 'task'
                ))
        );

        if (Mage::getStoreConfig('ampgrid/general/sorting')) {
            $this->setChild('sortcolumns_button',
                $this->getLayout()->createBlock('adminhtml/widget_button')
                    ->setData(array(
                    'label' => Mage::helper('ampgrid')->__('Sort Columns'),
                    'onclick' => 'pgridSortable.init();',
                    'class' => 'task',
                    'id' => 'pgridSortable_button',
                ))
            );
        }

        if (Mage::helper('ampgrid/mode')->isMulti()) {
            $this->setChild('saveall_button',
                $this->getLayout()->createBlock('adminhtml/widget_button')
                    ->setData(array(
                        'label' => Mage::helper('ampgrid')->__('Save'),
                        'onclick' => 'peditGrid.saveAll();',
                        'class' => 'save disabled',
                        'id' => 'ampgrid_saveall_button'
                    ))
            );
        }

        //export old setting from system.xml
        if (!Mage::getStoreConfig('ampgrid/general/exported_columns_from_system')
            && !Mage::getStoreConfig('ampgrid/general/just_installed')
        ) {
            Mage::helper('ampgrid/migratesettings')->exportOdlColumnSettings();
        } else {
            Mage::getConfig()->saveConfig('ampgrid/general/exported_columns_from_system', 1);
        }

        $this->_groupId = Mage::helper('ampgrid')->getSelectedGroupId();
        $this->_gridAttributes = Mage::helper('ampgrid')->prepareGridAttributesCollection($this->_groupId);

        return $this;
    }

    protected function _addColumnFilterToCollection($column)
    {
        if ($this->getCollection()) {
            $field = $column->getFilterIndex() ? $column->getFilterIndex() : $column->getIndex();

            if ($column->getFilterConditionCallback()) {
                call_user_func($column->getFilterConditionCallback(), $this->getCollection(), $column);
            } else {
                $cond = $column->getFilter()->getCondition();
                if ($field && isset($cond)) {
                    if (false !== strpos($field, 'am_attribute_')) {
                        $attribute = str_replace('am_attribute_', '', $field);
                        $this->getCollection()->addAttributeToFilter($attribute, $cond);
                    } elseif ('low_stock' == $field) {
                        $this->getCollection()->addFilter("if(stock_item.item_id IS NULL, 0 , 1)", $cond);
                    } elseif ('is_in_stock' == $field) {
                        $this->getCollection()
                            ->addFilter('IF(at_is_in_stock.use_config_manage_stock = 0 AND at_is_in_stock.manage_stock = 0, 2, at_is_in_stock.is_in_stock)', $cond);
                    } elseif ('backorders' == $field) {
                        $this->getCollection()
                            ->addFilter('IF(at_backorders.use_config_backorders = 1, 3, at_backorders.backorders)', $cond);
                    } elseif ('image_boolean' == $field) {
                        $this->getCollection()->addFilter($this->imageExpression, $cond);
                    } else {
                        parent::_addColumnFilterToCollection($column);
                    }
                }
            }
        }
        return $this;
    }

    protected function _setCollectionOrder($column)
    {
        $collection = $this->getCollection();

        if ($collection) {
            $columnIndex = $column->getFilterIndex() ? $column->getFilterIndex() : $column->getIndex();
            switch ($columnIndex) {
                case 'low_stock':
                case 'is_in_stock':
                case 'backorders':
                    $collection->getSelect()->order($columnIndex . ' ' . $column->getDir());
                    break;
                case 'thumbnail':
                    $collection->addAttributeToSort($columnIndex, $column->getDir());
                    break;
                case 'image_boolean':
                    $columnIndex = $column->getFilterIndex() ? $column->getFilterIndex() : $column->getIndex();
                    $collection->getSelect()->order($columnIndex . ' ' . $column->getDir());
                    break;
                default:
                    if (false !== strpos($columnIndex, 'am_attribute_')) {
                        $attribute = str_replace('am_attribute_', '', $columnIndex);
                        $this->setOrder($collection, $attribute, $column->getDir());
                    } else {
                        parent::_setCollectionOrder($column);
                    }
            }
        }
        return $this;
    }

    public function setOrder($collection, $attribute, $dir = 'desc')
    {
        if ('price' == $attribute) {
            $collection->addAttributeToSort($attribute, $dir);
        } else {
            $collection->getSelect()->order($attribute . ' ' . strtoupper($dir));
        }
        return $collection;
    }

    protected function _prepareCollection()
    {
        $replaceCollection = !Mage::helper('ambase')->isVersionLessThan(1, 7) && Mage::getStoreConfig('ampgrid/additional/category_anchor');
        if (!$replaceCollection) {
            return parent::_prepareCollection();
        }

        $store = $this->_getStore();
        $collection = new Amasty_Pgrid_Model_Resource_Product_Collection();
        $collection
            ->addAttributeToSelect('sku')
            ->addAttributeToSelect('name')
            ->addAttributeToSelect('attribute_set_id')
            ->addAttributeToSelect('type_id');

        if (Mage::helper('catalog')->isModuleEnabled('Mage_CatalogInventory')) {
            $collection->joinField('qty',
                'cataloginventory/stock_item',
                'qty',
                'product_id=entity_id',
                '{{table}}.stock_id=1',
                'left');
        }
        if ($store->getId()) {
            $adminStore = Mage_Core_Model_App::ADMIN_STORE_ID;
            $collection->addStoreFilter($store);
            $collection->joinAttribute(
                'name',
                'catalog_product/name',
                'entity_id',
                null,
                'inner',
                $adminStore
            );
            $collection->joinAttribute(
                'custom_name',
                'catalog_product/name',
                'entity_id',
                null,
                'inner',
                $store->getId()
            );
            $collection->joinAttribute(
                'status',
                'catalog_product/status',
                'entity_id',
                null,
                'inner',
                $store->getId()
            );
            $collection->joinAttribute(
                'visibility',
                'catalog_product/visibility',
                'entity_id',
                null,
                'inner',
                $store->getId()
            );
            $collection->joinAttribute(
                'price',
                'catalog_product/price',
                'entity_id',
                null,
                'left',
                $store->getId()
            );
        } else {
            $collection->addAttributeToSelect('price');
            $collection->joinAttribute(
                'status',
                'catalog_product/status',
                'entity_id',
                null,
                'inner'
            );
            $collection->joinAttribute(
                'visibility',
                'catalog_product/visibility',
                'entity_id',
                null,
                'inner'
            );
        }

        $this->setCollection($collection);

        Mage_Adminhtml_Block_Widget_Grid::_prepareCollection();
        $this->getCollection()->addWebsiteNamesToResult();
        return $this;
    }

    public function setCollection($collection)
    {
        $store = $this->_getStore();

        $this->_prepareCollectionExtra($collection, $store);

        if (!Mage::registry('product_collection')) {
            Mage::register('product_collection', $collection);
        }

        /**
         * Adding attributes
         */
        if (0 < $this->_gridAttributes->getSize()) {
            foreach ($this->_gridAttributes as $attribute) {
                if ('created_at' != $attribute->getAttributeCode()) {
                    $collection->joinAttribute(
                        $attribute->getAttributeCode(),
                        'catalog_product/' . $attribute->getAttributeCode(),
                        'entity_id',
                        null,
                        'left',
                        $store->getId()
                    );
                } else {
                    $message = Mage::helper('ampgrid')->__('Please avoid to use a product attribute with the created_at attribute code, because it is internal column of the catalog_product_entity database table. Please use the Creation Date extra column.');
                    Mage::getSingleton('adminhtml/session')->addNotice($message);
                }
            }
        }

        return parent::setCollection($collection);
    }

    protected function _prepareCollectionExtra($collection, $store)
    {
        $extraColumns = Mage::getModel('ampgrid/column')->getCollectionExtra($this->_groupId);

        foreach ($extraColumns as $column) {
            /**
             * @var Amasty_Pgrid_Model_Column $column
             */
            if (!$column->isVisible()) {
                continue;
            }

            switch ($column->getCode()) {
                case 'thumb':
                    $collection->joinAttribute(
                        'thumbnail',
                        'catalog_product/thumbnail',
                        'entity_id',
                        null,
                        'left',
                        $this->_getStore()->getId()
                    );
                    break;
                case 'am_special_from_date':
                    $collection->joinAttribute(
                        'am_special_from_date',
                        'catalog_product/special_from_date',
                        'entity_id',
                        null,
                        'left',
                        $store->getId()
                    );
                    break;
                case 'am_special_to_date':
                    $collection->joinAttribute(
                        'am_special_to_date',
                        'catalog_product/special_to_date',
                        'entity_id',
                        null,
                        'left',
                        $store->getId()
                    );
                    break;
                case 'low_stock':
                    $this->_addLowStockFilter($collection);
                    break;
                case 'qty_sold':
                    $qtySoldTable = Mage::getSingleton('core/resource')->getTableName('am_pgrid_qty_sold');
                    $collection->joinTable(
                        $qtySoldTable,
                        'product_id=entity_id',
                        array('qty_sold' => 'qty_sold'),
                        null,
                        'left'
                    );
                    break;
                case 'is_in_stock':
                    $collection->joinTable(
                        array('at_is_in_stock' => 'cataloginventory/stock_item'),
                        'product_id = entity_id',
                        array('IF(at_is_in_stock.use_config_manage_stock = 0 AND at_is_in_stock.manage_stock = 0, 2, at_is_in_stock.is_in_stock) AS is_in_stock'),
                        sprintf('{{table}}.stock_id=1 %s',
                            Mage::getConfig()->getModuleConfig('Aitoc_Aitquantitymanager')->is('active', 'true')
                                ? sprintf('AND {{table}}.website_id = %d', $store->getWebsiteId()) : '' ),
                        'left'
                    );
                    break;
                case 'backorders':
                    $collection->joinField('backorders',
                        'cataloginventory/stock_item',
                        'IF(at_backorders.use_config_backorders = 1, 3, at_backorders.backorders) AS backorders',
                        'product_id=entity_id',
                        sprintf('{{table}}.stock_id=1 %s',
                            Mage::getConfig()->getModuleConfig('Aitoc_Aitquantitymanager')->is('active', 'true')
                                ? sprintf('AND {{table}}.website_id = %d', $store->getWebsiteId()) : '' ),
                        'left');
                    break;
                case 'image_boolean':
                    $baseImageAttributeId = Mage::getModel('eav/entity_attribute')
                        ->loadByCode('catalog_product', 'image')
                        ->getId();
                    $smallImageAttributeId = Mage::getModel('eav/entity_attribute')
                        ->loadByCode('catalog_product', 'small_image')
                        ->getId();
                    $thumbnailAttributeId = Mage::getModel('eav/entity_attribute')
                        ->loadByCode('catalog_product', 'thumbnail')
                        ->getId();

                    $varcharTable = Mage::getSingleton('core/resource')->getTableName('catalog_product_entity_varchar');
                    if ($store->getId()) {
                        // checking value for store_id = 0 when the default value for the image is used
                        $this->imageExpression = "
                            IF((baseimage2.value='no_selection' OR (baseimage2.value IS NULL AND baseimage1.value='no_selection'))
                            OR (smallimage2.value='no_selection' OR (smallimage2.value IS NULL AND smallimage1.value='no_selection'))
                            OR (thumbnailimage2.value='no_selection' OR (thumbnailimage2.value IS NULL AND thumbnailimage1.value='no_selection')), 0 ,1)";

                        $collection->getSelect()
                            ->joinLeft(
                                array('baseimage2' => $varcharTable),
                                'e.entity_id = baseimage2.entity_id AND baseimage2.store_id=' . $store->getId()
                                . ' AND baseimage2.attribute_id=' . $baseImageAttributeId,
                                ''
                            )->joinLeft(
                                array('smallimage2' => $varcharTable),
                                'e.entity_id = smallimage2.entity_id AND smallimage2.store_id=' . $store->getId()
                                . ' AND smallimage2.attribute_id=' . $smallImageAttributeId,
                                ''
                            )->joinLeft(
                                array('thumbnailimage2' => $varcharTable),
                                'e.entity_id = thumbnailimage2.entity_id AND thumbnailimage2.store_id='
                                . $store->getId() . ' AND thumbnailimage2.attribute_id=' . $thumbnailAttributeId,
                                ''
                            );
                    }
                    // add base image data to collection
                    $collection->getSelect()
                        ->joinLeft(
                            array('baseimage1' => $varcharTable),
                            'e.entity_id = baseimage1.entity_id AND baseimage1.store_id = 0 AND baseimage1.attribute_id=' . $baseImageAttributeId,
                            array(
                                'image_boolean' => new Zend_Db_Expr(
                                    $this->imageExpression
                                )
                            )
                        )->joinLeft(
                            array('smallimage1' => $varcharTable),
                            'e.entity_id = smallimage1.entity_id AND smallimage1.store_id = 0 AND smallimage1.attribute_id=' . $smallImageAttributeId,
                            ''
                        )->joinLeft(
                            array('thumbnailimage1' => $varcharTable),
                            'e.entity_id = thumbnailimage1.entity_id AND thumbnailimage1.store_id = 0 AND thumbnailimage1.attribute_id=' . $thumbnailAttributeId,
                            ''
                        );

                    break;
            }
        }
    }

    protected function _addLowStockFilter($collection)
    {
        $configManageStock = (int) Mage::getStoreConfigFlag(Mage_CatalogInventory_Model_Stock_Item::XML_PATH_MANAGE_STOCK);
        $globalNotifyStockQty = (float) Mage::getStoreConfig(Mage_CatalogInventory_Model_Stock_Item::XML_PATH_NOTIFY_STOCK_QTY);
        Mage::helper('rss')->disableFlat();

        $stockItemWhere = '({{table}}.low_stock_date is not null) '
            . " AND ( ({{table}}.use_config_manage_stock=1 AND {$configManageStock}=1)"
            . " AND {{table}}.qty <"
            . " IF(stock_item.`use_config_notify_stock_qty`, {$globalNotifyStockQty}, {{table}}.notify_stock_qty)"
            . ' OR ({{table}}.use_config_manage_stock=0 AND {{table}}.manage_stock=1) )';

        if(Mage::getConfig()->getModuleConfig('Aitoc_Aitquantitymanager')->is('active', 'true')) {
            $stockItemWhere .=  sprintf('AND {{table}}.website_id = %d', $this->_getStore()->getWebsiteId());
        }

        $collection
            ->addAttributeToSelect('name', true)
            ->joinTable(
                array('stock_item' => 'cataloginventory/stock_item'),
                'product_id=entity_id',
                array('low_stock' => 'if(stock_item.item_id IS NULL, 0 , 1)'),
                $stockItemWhere,
                'left')
            ->setOrder('low_stock_date');
    }

    protected function _prepareColumns()
    {
        $this->addExportType('adminhtml/ampgrid_product/exportCsv', Mage::helper('customer')->__('CSV'));
        $this->addExportType('adminhtml/ampgrid_product/exportExcel', Mage::helper('customer')->__('Excel XML'));

        $this->_prepareColumnsStandard();
        $this->_prepareColumnsExtra();

        $actionsColumn = null;
        if (isset($this->_columns['action'])) {
            $actionsColumn = $this->_columns['action'];
            unset($this->_columns['action']);
        }

        // adding cost column
        if (0 < $this->_gridAttributes->getSize()) {
            Mage::register('ampgrid_grid_attributes', $this->_gridAttributes);
            Mage::helper('ampgrid')->attachGridColumns($this, $this->_gridAttributes, $this->_getStore());
        }

        if ($actionsColumn && !$this->_isExport) {
            $this->_columns['action'] = $actionsColumn;
        }

        $this->sortColumnsByDragPosition();

        if (Mage::helper('catalog')->isModuleEnabled('Mage_Rss')) {
            $this->addRssList('rss/catalog/notifystock', Mage::helper('catalog')->__('Notify Low Stock RSS'));
        }
    }

    protected function _prepareColumnsStandard()
    {

        $standardColumns = Mage::getModel('ampgrid/column')->getCollectionStandard($this->_groupId);
        foreach ($standardColumns as $column) {
            /**
             * @var Amasty_Pgrid_Model_Column $column
             */
            if(!$column->isVisible()) {
                continue;
            }
            switch ($column->getCode()) {
                case 'entity_id':
                    $this->addColumn('entity_id', array(
                        'header' => Mage::helper('catalog')->__($column->getTitle()),
                        'width' => '50px',
                        'type' => 'number',
                        'index' => 'entity_id',
                        'totals_label' => '<b>' . Mage::helper('ampgrid')->__('TOTALS') . '</b>',
                    ));
                    break;
                case 'name':
                    $this->addColumn('name', array(
                        'header' => Mage::helper('catalog')->__($column->getTitle()),
                        'index' => 'name',
                    ));

                    $store = $this->_getStore();
                    if ($store->getId()) {
                        $this->addColumn('custom_name', array(
                            'header' => Mage::helper('catalog')->__('%s in %s', $column->getTitle(), $store->getName()),
                            'index' => 'custom_name',
                        ));
                    }
                    break;
                case 'type':
                    $this->addColumn('type', array(
                        'header' => Mage::helper('catalog')->__($column->getTitle()),
                        'width' => '60px',
                        'index' => 'type_id',
                        'type' => 'options',
                        'options' => Mage::getSingleton('catalog/product_type')->getOptionArray(),
                    ));
                    break;
                case 'set_name':
                    $sets = Mage::getResourceModel('eav/entity_attribute_set_collection')
                                ->setEntityTypeFilter(Mage::getModel('catalog/product')->getResource()->getTypeId())
                                ->load()
                                ->toOptionHash();

                    $this->addColumn('set_name', array(
                        'header' => Mage::helper('catalog')->__($column->getTitle()),
                        'width' => '100px',
                        'index' => 'attribute_set_id',
                        'type' => 'options',
                        'options' => $sets,
                    ));
                    break;
                case 'sku':
                    $this->addColumn('sku', array(
                        'header' => Mage::helper('catalog')->__($column->getTitle()),
                        'width' => '80px',
                        'index' => 'sku',
                    ));
                    break;

                case 'price':
                    $store = $this->_getStore();
                    $this->addColumn('price', array(
                        'header' => Mage::helper('catalog')->__($column->getTitle()),
                        'type' => 'price',
                        'currency_code' => $store->getBaseCurrency()->getCode(),
                        'index' => 'price',
                    ));
                    break;
                case 'qty':
                    if (Mage::helper('catalog')->isModuleEnabled('Mage_CatalogInventory')) {
                        $this->addColumn('qty', array(
                            'header' => Mage::helper('catalog')->__($column->getTitle()),
                            'width' => '100px',
                            'type' => 'number',
                            'index' => 'qty',
                        ));
                    }
                    break;
                case 'visibility':
                    $this->addColumn('visibility', array(
                        'header' => Mage::helper('catalog')->__($column->getTitle()),
                        'width' => '70px',
                        'index' => 'visibility',
                        'type' => 'options',
                        'options' => Mage::getModel('catalog/product_visibility')->getOptionArray(),
                    ));
                    break;
                case 'status':
                    $this->addColumn('status', array(
                        'header' => Mage::helper('catalog')->__($column->getTitle()),
                        'width' => '70px',
                        'index' => 'status',
                        'type' => 'options',
                        'options' => Mage::getSingleton('catalog/product_status')->getOptionArray(),
                    ));
                    break;

                case 'websites':
                    if (!Mage::app()->isSingleStoreMode()) {
                        $this->addColumn('websites', array(
                            'header'=> Mage::helper('catalog')->__($column->getTitle()),
                            'width' => '100px',
                            'sortable' => false,
                            'index' => 'websites',
                            'type' => 'options',
                            'options' => Mage::getModel('core/website')->getCollection()->toOptionHash(),
                        ));
                    }
                    break;
                case 'action':
                    $this->addColumn('action', array(
                        'header' => Mage::helper('catalog')->__($column->getTitle()),
                        'width' => '50px',
                        'type' => 'action',
                        'getter' => 'getId',
                        'actions' => array(
                            array(
                                'caption' => Mage::helper('catalog')->__($column->getTitle()),
                                'url' => array(
                                    'base' => '*/*/edit',
                                    'params' => array('store'=>$this->getRequest()->getParam('store'))
                                ),
                                'field' => 'id'
                            )
                        ),
                        'filter' => false,
                        'sortable' => false,
                        'index' => 'stores',
                        'totals_label' => '',
                    ));
                    break;
            }
        }

    }

    protected function _prepareColumnsExtra()
    {
        $extraColumns = Mage::getModel('ampgrid/column')->getCollectionExtra($this->_groupId);
        foreach ($extraColumns as $column) {
            /**
             * @var Amasty_Pgrid_Model_Column $column
             */
            if (!$column->isVisible()) {
                continue;
            }
            switch ($column->getCode()) {
                case 'thumb':
                    if (!$this->_isExport) {
                        $this->addColumn('thumb', array(
                            'header' => Mage::helper('catalog')->__($column->getTitle()),
                            'renderer' => 'ampgrid/adminhtml_catalog_product_grid_renderer_thumb',
                            'index'	=> 'thumbnail',
                            'sortable' => true,
                            'filter' => false,
                            'width' => 90,
                        ));
                    }
                    break;
                case 'categories':
                    $categoryFilter = false;
                    $categoryOptions = array();
                    if (Mage::getStoreConfig('ampgrid/additional/category_filter')) {
                        $categoryFilter = 'ampgrid/adminhtml_catalog_product_grid_filter_category';
                        $categoryOptions = Mage::helper('ampgrid/category')->getOptionsForFilter();
                    }

                    $this->addColumn('categories', array(
                        'header' => Mage::helper('catalog')->__($column->getTitle()),
                        'index' => 'category_id',
                        'renderer' => 'ampgrid/adminhtml_catalog_product_grid_renderer_category',
                        'sortable' => false,
                        'filter' => $categoryFilter,
                        'type' => 'options',
                        'options' => $categoryOptions,
                    ));
                    break;
                case 'link':
                    $this->addColumn('link', array(
                        'header' => $this->__($column->getTitle()),
                        'index' => 'name',
                        'type' => 'text',
                        'sortable' => false,
                        'filter' => false,
                        'width' => "20px",
                        'renderer' => 'ampgrid/adminhtml_catalog_product_grid_renderer_link',
                    ));
                    break;
                case 'is_in_stock':
                    if (Mage::helper('catalog')->isModuleEnabled('Mage_CatalogInventory')) {
                        $options = array(
                            0 => $this->__('Out of stock'),
                            1 => $this->__('In stock'),
                            2 => $this->__('Manage Stock Disabled')
                        );
                        $this->addColumn('is_in_stock', array(
                            'header' => Mage::helper('catalog')->__($column->getTitle()),
                            'type' => 'options',
                            'options' => $options,
                            'index' => 'is_in_stock',
                        ));
                    }
                    break;
                case 'backorders':
                    if (Mage::helper('catalog')->isModuleEnabled('Mage_CatalogInventory')) {
                        $this->addColumn('backorders',
                            array(
                                'header' => Mage::helper('catalog')->__($column->getTitle()),
                                'type' => 'options',
                                'index' => 'backorders',
                                'options' => array(
                                    0 => $this->__('No Backorders'),
                                    1 => $this->__('Allow Qty Below 0'),
                                    2 => $this->__('Allow Qty Below 0 and Notify Customer'),
                                    3 => $this->__('Use Config Settings')
                                )
                            ));
                    }
                    break;
                case 'created_at':
                    $this->addColumn('created_at', array(
                        'header' => $this->__($column->getTitle()),
                        'index' => 'created_at',
                        'type' => 'date',
                    ));
                    break;
                case 'qty_sold':
                    $this->addColumn('qty_sold', array(
                        'header' => $this->__($column->getTitle()),
                        'index' => 'qty_sold',
                        'type' => 'number',
                        'width' => "40px"
                    ));
                    break;
                case 'updated_at':
                    $this->addColumn('updated_at', array(
                        'header' => $this->__($column->getTitle()),
                        'index' => 'updated_at',
                        'type' => 'date',
                    ));
                    break;
                case 'am_special_from_date':
                    $this->addColumn('am_special_from_date', array(
                        'header' => $this->__($column->getTitle()),
                        'index' => 'am_special_from_date',
                        'type' => 'date',
                    ));
                    break;
                case 'am_special_to_date':
                    $this->addColumn('am_special_to_date', array(
                        'header' => $this->__($column->getTitle()),
                        'index' => 'am_special_to_date',
                        'type' => 'date',
                    ));
                    break;
                case 'related_products':
                    $this->addColumn('related_products', array(
                        'header' => $this->__($column->getTitle()),
                        'index' => 'related_products',
                        'sortable' => false,
                        'filter' => false,
                        'renderer' => 'ampgrid/adminhtml_catalog_product_grid_renderer_related',
                    ));
                    break;
                case 'up_sells':
                    $this->addColumn('up_sells', array(
                        'header' => $this->__($column->getTitle()),
                        'index' => 'up_sells',
                        'sortable' => false,
                        'filter' => false,
                        'renderer' => 'ampgrid/adminhtml_catalog_product_grid_renderer_related',
                    ));
                    break;
                case 'cross_sells':
                    $this->addColumn('cross_sells', array(
                        'header' => $this->__($column->getTitle()),
                        'index' => 'cross_sells',
                        'sortable' => false,
                        'filter' => false,
                        'renderer' => 'ampgrid/adminhtml_catalog_product_grid_renderer_related',
                    ));
                    break;
                case 'low_stock':
                    $this->addColumn('low_stock', array(
                        'header' => Mage::helper('catalog')->__($column->getTitle()),
                        'type' => 'options',
                        'options' => array("0" => $this->__('No'), 1 => $this->__('Yes')),
                        'index' => 'low_stock',
                        'filter_index' => 'low_stock'
                    ));
                    break;

                case 'image_boolean':
                    $this->addColumn('image_boolean',
                        array(
                            'header'       => Mage::helper('catalog')->__($column->getTitle()),
                            'width'        => '70px',
                            'index'        => 'image_boolean',
                            'type'         => 'options',
                            'options'      => array(
                                0 => 'No',
                                1 => 'Yes',
                            ),
                            'sort_index'   => 'image_boolean',
                            'filter_index' => 'image_boolean',
                        ));
                    break;
            }
        }
    }

    public function addColumn($columnId, $column)
    {
        if (isset($column['sortable']) && !isset($column['renderer']) && false === $column['sortable']) {
            if (isset($column['type']) && 'action' == $column['type']) {
                $column['renderer']  = 'ampgrid/adminhtml_catalog_product_grid_renderer_action';
            } elseif (isset($column['options'])) {
                $column['renderer']  = 'ampgrid/adminhtml_catalog_product_grid_renderer_options';
            }
        }
        return parent::addColumn($columnId, $column);
    }

    public function sortColumnsByDragPosition()
    {
        if (!Mage::getStoreConfig('ampgrid/general/sorting')) {
            return $this;
        }
        $keys = array_keys($this->_columns);

        $orderedFields = Mage::helper('ampgrid')->getSelectedSorting($this->_groupId);
        if (empty($orderedFields)) {
            return $this;
        }

        $columns = array();
        foreach ($orderedFields as $field) {
            if (array_key_exists($field,$this->_columns)) {
                $columns[$field] = $this->_columns[$field];
            }
        }
        $unsortedColumns = array_diff_assoc($keys, $orderedFields);
        foreach ($unsortedColumns as $columnsIndex) {
            $columns[$columnsIndex] = $this->_columns[$columnsIndex];
        }

        $this->_columns = $columns;
        end($this->_columns);
        $this->_lastColumnId = key($this->_columns);
        return $this;
    }

    public function getAttributesButtonHtml()
    {
        return $this->getChildHtml('attributes_button');
    }

    public function getSortColumnsButtonHtml()
    {
        return $this->getChildHtml('sortcolumns_button');
    }

    public function getSaveAllButtonHtml()
    {
        return $this->getChildHtml('saveall_button');
    }

    public function getMainButtonsHtml()
    {
        $html = parent::getMainButtonsHtml();
        $html = $this->getSaveAllButtonHtml() . $this->getSortColumnsButtonHtml() . $this->getAttributesButtonHtml() . $html;
        return $html;
    }

   protected function _prepareMassaction()
   {
        parent::_prepareMassaction();
        Mage::dispatchEvent('am_product_grid_massaction', array('grid' => $this));
   }

    public function getTotals()
    {
        $needCount = false;
        $fields = array();
        $totals = new Varien_Object();

        $columns = Mage::getModel('ampgrid/column')->getCollectionAll($this->_groupId)
            ->addFieldToFilter('is_display_totals', 1);

        if (0 < $columns->getSize()) {
            foreach ($columns as $column) {
                $fields[$column->getCode()] = 0;
            }
            $needCount = true;
        }

        $attributeColumns = Mage::helper('ampgrid')->prepareGridAttributesCollection($this->_groupId);
        $attributeColumns->addFieldToFilter('is_display_totals', 1);

        if (0 < $attributeColumns->getSize()) {
            foreach ($attributeColumns as $column) {
                $fields[$column->getAttributeCode()] = 0;
            }
            $needCount = true;
        }

        if ($needCount) {
            foreach ($this->getCollection() as $item) {
                foreach ($fields as $field => $value) {
                    $fields[$field] += $item->getData($field);
                }
            }
            $totals->setData($fields);
        }

        return $totals;
    }
}