<?php

/**
 * RocketWeb
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 *
 * @category   RocketWeb
 * @package    RocketWeb_ShoppingFeeds
 * @copyright  Copyright (c) 2016 RocketWeb (http://rocketweb.com)
 * @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author     RocketWeb
 */

class Company_Feeds_Model_Feed_Type extends RocketWeb_ShoppingFeeds_Model_Feed_Type
{
    /**
     * Naming convention:
     * first word from type code delimited by "_" corresponds to the map class prefix under Model/Map
     *
     * The folder for myfeed classes is Company/Feeds/Model/Map/Myfeed/
     * and the main class is Company_Feeds_Model_Map_Myfeed_Abstract
     *
     * You also need the xml. Copy feeds/generic.xml into feeds/myfeed.xml
     */
    const TYPE_MYFEED           = 'myfeed';

    public function getOptionArray()
    {
        $options = parent::getOptionArray();

        // make sure you have this file
        $file = Mage::getModuleDir('etc', 'RocketWeb_ShoppingFeeds'). DS. 'feeds'. DS. self::TYPE_MYFEED. '.xml';
        if (!file_exists($file)) {
            Mage::throwException('Custom feed xml file not found, it should be in '.$file);
        }
        else {
            // add your feed type description to the array
            $options[self::TYPE_MYFEED] = Mage::helper('rocketshoppingfeeds')->__('My Custom Feed');
        }

        return $options;
    }

    /**
     * @return array 'type' => 'label'
     */
    public function getTaxonomyFeedTypes()
    {
        $types = parent::getTaxonomyFeedTypes();
        $types[self::TYPE_MYFEED] = Mage::helper('rocketshoppingfeeds')->__('My Custom Feed');
        return $types;
    }

    /**
     * @return array 'type' => 'URL'
     */
    public function getTaxonomyFeedUrl()
    {
        $types = parent::getTaxonomyFeedUrl();
        $types[self::TYPE_MYFEED] = 'file:///vagrant/taxonomy.txt';
        return $types;
    }

    public function getLabel($type)
    {
        $options = self::getOptionArray();
        return array_key_exists($type, $options) ? $options[$type] : ucwords(str_replace('_', '', $options[$type]));
    }
}
