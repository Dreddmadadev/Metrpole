<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

class Adexos_Product_Model_Category_Attribute_Backend_File extends Mage_Eav_Model_Entity_Attribute_Backend_Abstract{
    public function afterSave($object)
    {
        $value = $object->getData($this->getAttribute()->getName());

        if (is_array($value) && !empty($value['delete'])) {
            $object->setData($this->getAttribute()->getName(), '');
            $this->getAttribute()->getEntity()
                ->saveAttribute($object, $this->getAttribute()->getName());
            return;
        }

        $path = Mage::getBaseDir('media') . DS . 'catalog' . DS . 'product' . DS;
        try {
            $uploader = new Mage_Core_Model_File_Uploader($this->getAttribute()->getName());

            $uploader->setAllowedExtensions(array('pdf','doc','txt', 'docx'));
            $uploader->setAllowRenameFiles(true);
            $result = $uploader->save($path);

            $object->setData($this->getAttribute()->getName(), $result['file']);
            $this->getAttribute()->getEntity()->saveAttribute($object, $this->getAttribute()->getName());
        } catch (Exception $e) {
            if ($e->getCode() != Mage_Core_Model_File_Uploader::TMP_NAME_EMPTY) {
                Mage::logException($e);
            }
            return;
        }
    }
}