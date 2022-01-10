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


class Mirasvit_FeedExport_Model_Feed_Generator_Action_MergeFiles extends Mirasvit_FeedExport_Model_Feed_Generator_Action
{
    public function process()
    {
        $this->start();

        $feed    = $this->getFeed();
        $io      = Mage::helper('feedexport/io');
        $pattern = Mage::getModel('feedexport/feed_generator_pattern');
        $pattern->setFeed($this->getFeed());
        $format  = $feed->getFormat();

        $tmpPath = Mage::getSingleton('feedexport/config')->getTmpPath($feed->getTmpPathKey());

        $arContent = explode('%%', $pattern->getPatternValue($format['template'], 'global', null));

        $writeStream = $io->streamOpen($tmpPath.DS.'result.dat', 'w');

        foreach ($arContent as $value) {
            if (substr($value, 0, 1) == '%') {
                $entity     = substr($value, 1, strlen($value) - 1);
                $entityFile = $tmpPath.DS.$entity.'.dat';

                if ($entity && $io->fileExists($entityFile)) {
                    $readStream = $io->streamOpen($entityFile);

                    while ($line = $io->streamRead($readStream)) {
                        $io->streamWrite($writeStream, $line);
                    }
                } else {
                    $value = substr($value, 1);
                    $io->streamWrite($writeStream, $value);
                }
            } else {
                $io->streamWrite($writeStream, $value);
            }
        }

        $io->streamClose($writeStream);

        $this->finish();

        @file_put_contents($tmpPath.DS.'result.dat', chr(239) . chr(187) . chr(191) . (file_get_contents($tmpPath.DS.'result.dat')));

        return $this;
    }
}