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


class Mirasvit_FeedExport_Model_Feed_Generator_Pattern_Global
    extends Mirasvit_FeedExport_Model_Feed_Generator_Pattern
{
    public function getValue($pattern, $obj)
    {
        $value = null;

        $pattern = $this->parsePattern($pattern);

        switch($pattern['key']) {
            case 'base_url':
                $value = $this->getStore()->getBaseUrl();
                $value = str_replace('/index.php', '', $value);
                break;

            case 'base_email':
                $value = Mage::getStoreConfig('trans_email/ident_general/email', $this->getStore());
                break;

            case 'php':
                $value = eval('return '.$pattern['formatters'][0].';');
                break;
        }

        return $value;
    }
}