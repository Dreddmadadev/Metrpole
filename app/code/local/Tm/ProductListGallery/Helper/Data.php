<?php 

class Tm_ProductListGallery_Helper_Data extends Mage_Core_Helper_Data
{
	public function getConfigData($group)
	{
		if (!isset($group)) {			
			return false;
		} 
		$config = array(
			'active'				=> Mage::getStoreConfig('productlistgallery/'. $group .'/active', Mage::app()->getStore()),
			'image_width'			=> Mage::getStoreConfig('productlistgallery/'. $group .'/image_width', Mage::app()->getStore()),
	        'image_height'			=> Mage::getStoreConfig('productlistgallery/'. $group .'/image_height', Mage::app()->getStore()),
	        'thumb_size'			=> Mage::getStoreConfig('productlistgallery/'. $group .'/thumb_size', Mage::app()->getStore()),
		);
		return $config;
	}

    /**
     * @param $_productCollection
     * @param $customerGroup
     *
     * @return Varien_Data_Collection
     *
     * @inheritdoc reorder the product collection with custom prices in first (group price or tier price)
     */
	public function getCollectionReorderedByCustomPrice($_productCollection, $customerGroup){
        $preferedProduct = array();

        foreach ($_productCollection as $key => $_product){

            $groupPrices = $this->getGroupPrices($_product);

            if (!is_null($groupPrices) || is_array($groupPrices)) {
                foreach ($groupPrices as $groupPrice) {
                    if($groupPrice['cust_group'] == $customerGroup){
                        array_push($preferedProduct, $_product);
                        $_productCollection->removeItemByKey($key);
                        break; // stop to check the user group, leave the loop
                    }
                }
            }

            if(sizeof($_product->getTierPrice()) > 0){
                array_push($preferedProduct, $_product);
                $_productCollection->removeItemByKey($key);
            }

            // If it is a configurable product and one of them have a custom price,
            // we have to go up in the product list
            if($_product->isConfigurable()) {
                $childProducts = Mage::getModel('catalog/product_type_configurable')
                    ->getUsedProducts(null,$_product);

                foreach($childProducts as $child) {

                    $child = Mage::getModel('catalog/product')->load($child->getId());

                    $groupPricesChild = $this->getGroupPrices($child);

                    if (!is_null($groupPricesChild) || is_array($groupPricesChild)) {
                        foreach ($groupPricesChild as $groupPrice) {
                            if($groupPrice['cust_group'] == $customerGroup){
                                array_push($preferedProduct, $_product);
                                $_productCollection->removeItemByKey($key);
                                break; // stop to check the user group, leave the loop
                            }
                        }
                    }

                    if(sizeof($child->getTierPrice()) > 0){
                        array_push($preferedProduct, $_product);
                        $_productCollection->removeItemByKey($key);
                        break; // if one child have a custom price, leave the loop
                    }
                }
            }
        }

        // this collection is in the good order;
        $collection = new Varien_Data_Collection();

        foreach ($preferedProduct as $_product){
            try {
                $collection->addItem($_product);
            } catch (Exception $e) {
                Mage::logException($e);
            }
        }

        foreach ($_productCollection as $_product){
            try {
                $collection->addItem($_product);
            } catch (Exception $e) {
                Mage::logException($e);
            }
        }

        return $collection;
    }

    /**
     * @param $_product
     *
     * @return mixed
     *
     * @inheritdoc return all group prices
     */
    public function getGroupPrices($_product){
        $groupPrices = $_product->getData('group_price');

        if (is_null($groupPrices)) {
            $attribute = $_product->getResource()->getAttribute('group_price');
            if ($attribute) {
                $attribute->getBackend()->afterLoad($_product);
                $groupPrices = $_product->getData('group_price');
            }
        }

        return $groupPrices;
    }
}