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


abstract class Mirasvit_FeedExport_Controller_Adminhtml_Report extends Mage_Adminhtml_Controller_Action
{
    /**
     * Render main layout
     */
    abstract public function indexAction();

    /**
     * Refresh statistic
     *
     * @return object $this
     */
    abstract public function refreshRecentAction();

    /**
     * @return $this
     */
    public function _initAction()
    {
        $this->loadLayout()
            ->_setActiveMenu('catalog')
            ->_addBreadcrumb(Mage::helper('feedexport')->__('Feed Export'), Mage::helper('feedexport')->__('Feed Export'));

        return $this;
    }

    /**
     * @param $blocks
     * @return $this
     */
    public function _initReportAction($blocks)
    {
        if (!is_array($blocks)) {
            $blocks = array($blocks);
        }

        $requestData = Mage::helper('adminhtml')->prepareFilterString($this->getRequest()->getParam('filter'));
        $requestData = $this->_filterDates($requestData, array('from', 'to'));
        $requestData['store_ids'] = $this->getRequest()->getParam('store_ids');
        $params = new Varien_Object();

        foreach ($requestData as $key => $value) {
            if (!empty($value)) {
                $params->setData($key, $value);
            }
        }

        foreach ($blocks as $block) {
            if ($block) {
                $block->setPeriodType($params->getData('period_type'));
                $block->setFilterData($params);
            }
        }

        return $this;
    }

    /**
     * @return $this
     */
    protected function _showRefreshRecent()
    {
        $controller = $this->getRequest()->getControllerName();
        $directRefreshLink = $this->getUrl('*/'.$controller.'/refreshRecent');
        Mage::getSingleton('adminhtml/session')->addNotice(Mage::helper('feedexport')->__('To refresh statistics, click <a href="%s">here</a>.',
            $directRefreshLink));

        return $this;
    }
} 