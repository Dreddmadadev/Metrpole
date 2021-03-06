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
 * @package   mirasvit/extension_fpc
 * @version   1.0.87
 * @copyright Copyright (C) 2018 Mirasvit (https://mirasvit.com/)
 */



class Mirasvit_FpcCrawler_Model_Crawlerlogged_Crawl extends Varien_Object
{
    const USER_AGENT = 'FpcCrawlerlogged';

    protected $_status = array();
    protected $_lockFile = null;
    protected $_useThreads = false; //true - enable multithreads

    public function checkFpcStatus()
    {
        $cacheType = Mage::app()->getCacheInstance()->getTypes();
        if (isset($cacheType['fpc']) && $cacheType['fpc']->getStatus() == 0) { // if 0 FPC disabled
            return false;
        }

        return true;
    }

    public function run($verbose = false)
    {
        if ((Mage::getSingleton('fpccrawler/config')->isEnabled(true) && !$this->isLocked() && $this->checkFpcStatus())
            || ($verbose && is_bool($verbose) && !$this->isLocked() && $this->checkFpcStatus())) {
            if (Mage::getSingleton('fpccrawler/config')->isRunAsApacheUser()) {
                $this->_request('run');
            } else {
                $this->doRun($verbose);
            }
        }
    }

    public function doRun($verbose = false, $isIgnoreTotalCount = false, $storeId = false)
    {
        if (!$storeId) {
            $storeId = Mage::getSingleton('fpccrawler/config')->getStoresIds(true);
        }
        if ($isIgnoreTotalCount) {
            $this->lockFileName = 'fpccrawlerlogged_fpc_generate'.(int) $storeId.'.lock';
            echo 'Logged in users crawl start:'.PHP_EOL;
        }

        $this->lock();
        $this->addStatusMessage('start', sprintf(__('Started at: %s', Mage::getSingleton('core/date')->date())));
        $config = Mage::getSingleton('fpccrawler/config');
        $collection = $this->getUrlCollection($storeId);
        $urls = array();
        $crawlUrlLimit = $config->getCrawlUrlLimit(true);

        $totalCount = 0;
        $totalUrls = 0;
        $threads = $this->getThreads();
        if ($threads == 1) {
            while ($row = $collection->fetch()) {
                $urlModel = Mage::getModel('fpccrawler/crawlerlogged_url')->load($row['url_id']);
                ++$totalUrls;

                if ($totalUrls > $crawlUrlLimit) {
                    break;
                }

                if (!$urlModel->isCacheExist()) {
                    if ($isIgnoreTotalCount) {
                        echo $urlModel->getUrl().PHP_EOL;
                    }
                    $warm = $urlModel->warmCache();

                    $this->_removeDublicates($urlModel);

                    if ($warm) {
                        ++$totalCount;
                    }
                    $this->addStatusMessage('process', sprintf(__('Crawled %d urls', $totalCount)));
                    if ($totalCount >= $config->getCrawlerMaxUrlsPerRun(true)  && !$isIgnoreTotalCount) {
                        break;
                    }
                }
            }
        } else {
            //multithreads
            $currentStoreId = false;
            $currentCurrency = false;
            $currentCustomerGroupId = false;
            $done = false;
            $htaccessAuth = $config->getHtaccessAuth();
            $verifyPeer = $config->getVerifyPeer();
            while ($row = $collection->fetch()) {
                if (!is_string($row['url_id'])) {
                    continue;
                }
                $urlModel = Mage::getModel('fpccrawler/crawlerlogged_url')->load($row['url_id']);

                if (!$urlModel->isCacheExist()
                    && ((!$currentStoreId && !$currentCurrency && !$currentCustomerGroupId)
                        || ($currentStoreId == $urlModel->getStoreId()
                            && $currentCurrency == $urlModel->getCurrency()
                            && $currentCustomerGroupId == $urlModel->getCustomerGroupId()))) {
                    $urls[$row['url_id']] = $urlModel->getUrl();
                    if (!$currentStoreId && !$currentCurrency && !$currentCustomerGroupId) {
                        $currentStoreId = $urlModel->getStoreId();
                        $currentCurrency = $urlModel->getCurrency();
                        $currentCustomerGroupId = $urlModel->getCustomerGroupId();
                    }
                    $userAgent = Mage::helper('fpccrawler')->getUserAgent($currentCustomerGroupId, $currentStoreId, $currentStoreId);
                    $urlsCount = $totalCount + count($urls);
                    if (count($urls) == $threads ||
                        $urlsCount >= $config->getCrawlerMaxUrlsPerRun()) {
                        $this->requestUrls($urls, $verbose, $userAgent, $htaccessAuth, $verifyPeer);
                        $totalCount = $totalCount + count($urls);
                        $urls = array();
                        $this->addStatusMessage('process', sprintf(__('Crawled %d urls', $totalCount)));
                        if ($totalCount >= $config->getCrawlerMaxUrlsPerRun()) {
                            $done = true;
                            break;
                        }
                    }
                }
            }

            if (!$done && isset($urls) && count($urls)) {
                $this->requestUrls($urls, $verbose, $userAgent, $htaccessAuth, $verifyPeer);
                $totalCount = $totalCount + count($urls);
                $urls = array();
                $this->addStatusMessage('process', sprintf(__('Crawled %d urls', $totalCount)));
            }
        }

        $this->addStatusMessage('process', sprintf(__('Crawled %d urls', $totalCount)))
            ->addStatusMessage('finish', sprintf(__('Finished at: %s', Mage::getSingleton('core/date')->date())));
        $this->unlock();
    }

    protected function getThreads()
    {
        $threads = (int) Mage::getSingleton('fpccrawler/config')->getCrawlerMaxThreads(true);
        if (!$this->_useThreads || !$threads || $threads > 20) {
            $threads = 1;
        }

        return $threads;
    }

    //multithreads
    public function requestUrls($urls, $verbose = true, $userAgent, $htaccessAuth = false, $verifyPeer)
    {
        $multiResult = array();

        if (function_exists('curl_multi_init')) {
            $adapter = new Varien_Http_Adapter_Curl();
            $options = array(
                CURLOPT_USERAGENT => $userAgent,
                CURLOPT_HEADER => true,
                CURLOPT_SSL_VERIFYPEER => $verifyPeer,
                CURLOPT_USERPWD => ($htaccessAuth) ? $htaccessAuth : null,
            );

            $multiResult = $adapter->multiRequest($urls, $options);
        } else {
            ini_set('user_agent', $userAgent);
            foreach ($urls as $urlId => $url) {
                $multiResult[$urlId] = implode(PHP_EOL, get_headers($url));
            }
        }

        foreach ($multiResult as $urlId => $content) {
            $urlModel = Mage::getModel('fpccrawler/crawlerlogged_url')->load($urlId);
            $this->_removeDublicates($urlModel);
            $matches = array();
            preg_match('/Fpc-Cache-Id: ('.Mirasvit_Fpc_Model_Config::REQUEST_ID_PREFIX.'[a-z0-9]{32})/', $content, $matches);
            if (count($matches) == 2) {
                $cacheId = $matches[1];
                if ($urlModel->getCacheId() != $cacheId) {
                    $urlModel->setCacheId($cacheId)
                        ->save();
                }
            } else {
                $urlModel->delete();
            }
        }

        return $this;
    }

    /**
     * ???????????????????? http ???????????? ???? ???????????????????? ????????????????????
     * ?????????? ?????????????? ?????? ???????????????? ???????????????? ???????????????????????? ???? apache ????????????????????????.
     *
     * @param string $command ???????????????? (run)
     *
     * @return string
     */
    protected function _request($command)
    {
        $httpClient = new Zend_Http_Client();
        $httpClient->setConfig(array('timeout' => 60000));

        $store = Mage::app()->getStore(0);
        $url = $store->getUrl('fpccrawler/fpccrawlerlogged_action/'.$command, array('_query' => array('rand' => microtime(true))));
        $url = str_replace('fpc.php/', '', $url);
        $result = $httpClient->setUri($url)->request()->getBody();

        return $result;
    }

    public function addStatusMessage($key, $message)
    {
        $this->_status[$key] = $message;

        Mage::helper('fpccrawler')->setVariable('status_logged', implode(PHP_EOL, $this->_status));

        return $this;
    }

    public function getUrlCollection($storeId)
    {
        $sortByPageTypeCount = count(Mage::getSingleton('fpccrawler/config')->getSortByPageType(true));
        $sortByProductAttributeCount = count(Mage::getSingleton('fpccrawler/config')->getSortByProductAttribute(true));
        $sortCrawlerUrls = Mage::getSingleton('fpccrawler/config')->getSortCrawlerUrls(true);
        $resource = Mage::getSingleton('core/resource');
        $read = $resource->getConnection('core_read');
        $select = $read->select()
            ->from($resource->getTableName('fpccrawler/crawlerlogged_url', array('*')));
        $storeId = ($storeId && strpos($storeId, ',') !== false) ? explode(',', $storeId) : $storeId;
        if ($storeId) {
            $select->where('store_id IN(?)', $storeId);
        }
        if ($sortCrawlerUrls == 'custom_order' && $sortByPageTypeCount > 0 && $sortByProductAttributeCount > 0) {
            $select->order(Mage::helper('fpccrawler')->getOrderSql(true, true));
        } elseif ($sortCrawlerUrls == 'custom_order' && $sortByPageTypeCount > 0) {
            $select->order(Mage::helper('fpccrawler')->getOrderSql(false, true));
        } elseif ($sortCrawlerUrls == 'custom_order' && $sortByProductAttributeCount > 0) {
            $select->order(array('sort_by_product_attribute asc', 'rate desc'));
        } else {
            $select->order('rate desc');
        }
        $select->limit(200000);

        return $read->query($select);
    }

    protected function _removeDublicates($urlModel)
    {
        $collection = Mage::getModel('fpccrawler/crawlerlogged_url')->getCollection()
            ->addFieldToFilter('url_id', array('neq' => $urlModel->getId()))
            ->addFieldToFilter('cache_id', $urlModel->getCacheId())
            ->addFieldToFilter('customer_group_id', array('neq' => $urlModel->getCustomerGroupId()))
            ->addFieldToFilter('store_id', array('neq' => $urlModel->getStoreId()))
            ->addFieldToFilter('currency', array('neq' => $urlModel->getCurrency()));

        foreach ($collection as $url) {
            $url->delete();
        }

        return $this;
    }

    protected function _getLockFile()
    {
        if ($this->_lockFile === null) {
            $varDir = Mage::getConfig()->getVarDir('locks');
            $lockFile = ($this->lockFileName) ? $this->lockFileName : 'fpccrawlerlogged.lock';
            $file = $varDir.DS.$lockFile;

            if (is_file($file)) {
                $this->_lockFile = fopen($file, 'w');
            } else {
                $this->_lockFile = fopen($file, 'x');
            }
            fwrite($this->_lockFile, date('r'));
        }

        return $this->_lockFile;
    }

    public function lock()
    {
        flock($this->_getLockFile(), LOCK_EX | LOCK_NB);

        return $this;
    }

    public function lockAndBlock()
    {
        flock($this->_getLockFile(), LOCK_EX);

        return $this;
    }

    public function unlock()
    {
        flock($this->_getLockFile(), LOCK_UN);

        return $this;
    }

    public function isLocked()
    {
        $fp = $this->_getLockFile();
        if (flock($fp, LOCK_EX | LOCK_NB)) {
            flock($fp, LOCK_UN);

            return false;
        }

        return true;
    }

    public function __destruct()
    {
        if ($this->_lockFile) {
            fclose($this->_lockFile);
        }
    }
}
