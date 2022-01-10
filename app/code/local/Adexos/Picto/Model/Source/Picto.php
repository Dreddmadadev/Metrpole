<?php
class Adexos_Picto_Model_Source_Picto extends Mage_Eav_Model_Entity_Attribute_Source_Abstract
{

    public function getAllOptions()
    {
        $collection = Mage::getModel('adexos_picto/picto')
            ->getCollection();
        $result = array();
        foreach($collection as $picto)
        {
            $result[] = array(
                'value' => $picto->getId(),
                'label' => $picto->getName()
            );
        }
        return $result;
    }
}