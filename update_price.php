<?php 
/*
Soit un coefficient de 1,0526 sur tous les prix.
Exemple :
100 € HT devient 100 x 1,0526 = 105,26
*/

require_once dirname(__FILE__) . '/app/Mage.php'; //path to mage bootstrapper
umask(0);
Mage::app()->setCurrentStore(Mage_Core_Model_App::ADMIN_STORE_ID);

$_products = Mage::getModel('catalog/product')->getCollection()->addAttributeToSelect('*');

foreach ($_products as $_product) {
    	$price = (float) $_product->getData()['price'];
    	if ( $price > 0 ) {

    		$coef = (float) 1.0526;
    		$new_price = $price * $coef;

    		echo $price . ' => ' . $new_price . ' => ' . $_product->getId();
		    $_product->setPrice($new_price);
		    $_product->getResource()->saveAttribute($_product, 'price');
			echo ' <hr>';	
    	}

}


?>