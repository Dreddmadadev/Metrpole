<?php

/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 19/03/18
 * Time: 16:04
 */
require Mage::getBaseDir() . '/vendor/autoload.php';

use Spipu\Html2Pdf\Html2Pdf;

class Adexos_Product_PrintController extends Mage_Core_Controller_Front_Action
{
    public function indexAction()
    {
        $pid = $this->getRequest()->getParam("pid");
        if ($this->getRequest()->isGet() && $pid) {
            $product = Mage::getModel("catalog/product")->load($pid);
            $html2pdf = new Html2Pdf();
            $html2pdf->writeHTML($this->getHtml($product));

            $unwanted_array = array(    'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
                                        'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U',
                                        'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c',
                                        'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o',
                                        'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y' );

            $pdf_name = strtr( $product->getName().".pdf", $unwanted_array );

            $html2pdf->output($pdf_name);
        } else {
            $this->_redirectReferer();
        }
    }

    private function getHtml($product)
    {
        $html = '<page>
<style>
p{
  font-size:12px;
  margin:5px 20px;
  padding:0;
}
table{
font-size: 10px;
}
td p {
max-width: 90px;
margin: 0;
}
</style>
    <div>
        <div style="display: block; max-width: 250px;">
            <img src="' . Mage::getDesign()->getSkinUrl('images/logo.png') . '"/>
        </div>
    </div>

    <table style="width: 100%;">
            <tr style="vertical-align: top; height: 20px">
                <td style="width:60%;height: 20px"><h1 style="font-size: 18px; color: #36a6bc">' . $product->getName() . '</h1></td>
                <td style="width:45%;height: 20px"><ul>';
        foreach ($product->getCategoryIds() as $categ_id) {
            $categ = Mage::getModel("catalog/category")->load($categ_id);
            if(!preg_match('/- Home$/',$categ->getName())){
                $html .= '<li style="background-color: #36a6bc; color: white;  width: 80%;padding:5px;">' . $categ->getName() . '</li>';

            }
        }


        $html .= '</ul></td></tr></table>

    <div style="">
        <span style="padding:20px;display:inline-block"><img src="' . Mage::helper('catalog/image')->init($product, 'thumbnail') . '"
             style="width:300px;"  align="left"></span>' . ($product->getDescription()) . '

    </div><div>';

        foreach ($product->getMediaGalleryImages() as $image) {
            if ($product->getThumbnail() != $image->getFile()) {


                $html .= '
            <img src="' . Mage::helper('catalog/image')->init($product, 'image', $image->getFile())->resize(200,200) . '" />';

            }
        }







        $html .='</div><page_footer>
        <div style="font-size: 10px; margin-bottom: 5px; padding-bottom: 5px; border-bottom: 1px solid black">
            La reproduction totale ou partielle des images, textes et illustrations est interdite sans notre autorisation. Photos non contractuelles.
        </div>
         <div style="margin-bottom: 3px">
        Metropole Equipements SAS - ZA Les portes du Vexin, 34 Rue Ampère 95 300 ENNERY
        </div>
        <div>
          Tél : +33 (0)1 83 62 09 66 / Fax : +33 (0)1 34 40 52 08 / mail : contact@metropole-equipements.com
        </div>
    </page_footer>

</page>';


        return $html;
    }
}
