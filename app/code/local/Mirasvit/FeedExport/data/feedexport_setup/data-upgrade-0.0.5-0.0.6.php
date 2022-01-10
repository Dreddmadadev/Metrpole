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


$templatePath = Mage::getSingleton('feedexport/config')->getTemplatePath();
$rulePath     = Mage::getSingleton('feedexport/config')->getRulePath();

$ioFile = new Varien_Io_File();
$ioFile->open();

$ioFile->cd($templatePath);
foreach ($ioFile->ls(Varien_Io_File::GREP_FILES) as $fl) {
    if ($fl['filetype'] == 'xml') {
        $template = Mage::getModel('feedexport/template');
        $template->import($templatePath.DS.$fl['text']);
    }
}

$ioFile->cd($rulePath);
foreach ($ioFile->ls(Varien_Io_File::GREP_FILES) as $fl) {
    if ($fl['filetype'] == 'xml') {
        $rule = Mage::getModel('feedexport/rule');
        $rule->import($rulePath.DS.$fl['text']);
    }
}