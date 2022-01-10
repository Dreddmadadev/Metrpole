<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) 2019 Amasty (https://www.amasty.com)
 * @package Amasty_Gdpr
 */


class Amasty_Gdpr_Model_Container_Cookie extends Enterprise_PageCache_Model_Container_Abstract
{

    protected function _getCacheId()
    {
        return 'amasty_gdpr_cookie' . $this->_getIdentifier();
    }

    protected function _getIdentifier()
    {
        return microtime();
    }

    protected function _renderBlock()
    {
        $blockClass = $this->_placeholder->getAttribute('block');
        $template = $this->_placeholder->getAttribute('template');
        $block = new $blockClass;
        $block->setTemplate($template);
        $layout = Mage::app()->getLayout();
        $block->setLayout($layout);

        return $block->toHtml();
    }

    protected function _saveCache($data, $id, $tags = array(), $lifetime = null)
    {
        return false;
    }
}