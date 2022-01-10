<?php

class Adexos_Megamenu_Block_Navigation extends Cmsmart_Megamenu_Block_Navigation
{
    protected function _renderCategoryMenuItemHtml($category, $level = 0, $isLast = false, $isFirst = false,
                                                   $isOutermost = false, $outermostItemClass = '', $childrenWrapClass = '', $noEventAttributes = false, $countSameLevel = 5)
    {
        $showthumbnail = Mage::helper('megamenu')->getShowthumbnail($category->getId());
        $nothumbnail = "";
        $classblock = '';
        $width = Mage::getStoreConfig('megamenu/mainmenu/width_thumbnail_category');
        $height = Mage::getStoreConfig('megamenu/mainmenu/height_thumbnail_category');
        $widthp = 0;
        if (!$category->getIsActive()) {
            return '';
        }
        $html = array();
        if (Mage::helper('catalog/category_flat')->isEnabled()) {
            $children = (array)$category->getChildrenNodes();
            $childrenCount = count($children);
        } else {
            $children = $category->getChildren();
            $childrenCount = $children->count();
        }
        $hasChildren = ($children && $childrenCount);
        $activeChildren = array();

        foreach ($children as $child) {
            if ($child->getIsActive()) {
                $activeChildren[] = $child;
            }

        }

        $activeChildrenCount = count($activeChildren);
        $hasActiveChildren = ($activeChildrenCount > 0);
        $classes = array();
        $classes[] = 'level' . ($level === 0 ? '' : $level);
        $classes[] = 'nav-' . $this->_getItemPosition($level);
        if ($this->isCategoryActive($category)) {
            $classes[] = 'active';
        }
        $linkClass = '';
        if ($isOutermost && $outermostItemClass) {
            $classes[] = $outermostItemClass;
            $linkClass = ' class="' . $outermostItemClass . '"';
        }
        if ($isFirst) {
            $classes[] = 'first';
        }
        if ($isLast) {
            $classes[] = 'last';
        }
        if ($hasActiveChildren) {
            $classes[] = 'parent';
        }
        if ($this->_isAccordion == FALSE && $level == 1) {
            $classes[] = 'item';
        }
        $column = $this->getLevle($category->getId());


        $attributes = array();
        if (count($classes) > 0) {
            $attributes['class'] = implode(' ', $classes);
        }
        if ($hasActiveChildren && !$noEventAttributes) {
            $attributes['onmouseover'] = 'toggleMenu(this,0)';
            $attributes['onmouseout'] = 'toggleMenu(this,0)';
        }
        if ($showthumbnail != 1) {
            $nothumbnail .= ' no-level-thumbnail';
        } else {
            $nothumbnail .= ' level-thumbnail';
        }
        $htmlLi = '<li ';


        foreach ($attributes as $attrName => $attrValue) {
            $htmlLi .= ' ' . $attrName . '="' . str_replace('"', '\"', $attrValue) . ' ' . $nothumbnail . '"';
        }

        if ($level == 1) {
            $idc = $category->parent_id;
            $widthp = "calc(" . (100 / ($countSameLevel)) . "% - 40px )";
            $htmlLi .= 'style="width:' . $widthp . ';float:left;">';


        } else {
            $htmlLi .= '>';
        }
        $html[] = $htmlLi;
        $id = $category->getId();
        $megamenu = Mage::helper('megamenu')->Megamenu($id);
        $cat = Mage::getModel('catalog/category')->load($category->getId());
        $model = $cat->getDisplay_mode();
        $imgaes = Mage::getModel('catalog/category')->load($category->getId())->getImageUrl();
        if ($level == 1) {
            $html[] = '<a style="background-color:' . $this->backgroundcolor($megamenu) . ' border-bottom: 2px solid ' . $this->fontcolor($megamenu) . '" class="catagory-level1" href="' . $this->getCategoryUrl($category) . '"' . $linkClass . '>';
        } else {
            $html[] = '<a  style="background-color:' . $this->backgroundcolor($megamenu) . '" href="' . $this->getCategoryUrl($category) . '"' . $linkClass . '>';
        }


        if ((isset($megamenu[0]) && $childrenCount && $megamenu[0]['category_children'] == 0) || isset($megamenu[0]) && ($megamenu[0]['active_product'] == 1) || isset($megamenu[0]) && ($megamenu[0]['active_product'] == 1) || isset($megamenu[0]) && ($megamenu[0]['active_static_block'] == 1)) {
            $html[] = '<span>' . $this->escapeHtml($category->getName()) . $this->getLabel($megamenu) . '</span><span class="spanchildren"></span>';
        } else {
            $html[] = '<span>' . $this->escapeHtml($category->getName()) . $this->getLabel($megamenu) . '</span>';
        }
        $html[] = '</a>';
        if ($level == 1) {
            $html[] = '';
        }
        // render children
        $htmlChildren = '';
        $j = 0;
        foreach ($activeChildren as $child) {
            $htmlChildren .= $this->_renderCategoryMenuItemHtml(
                    $child,
                    ($level + 1),
                    ($j == $activeChildrenCount - 1),
                    ($j == 0),
                    false,
                    $outermostItemClass,
                    $childrenWrapClass,
                    $noEventAttributes,
                    $activeChildrenCount
            );

            $j++;
        }

        $standard_menu = Mage::getStoreConfig('megamenu/mainmenu/standard_menu');
        if ($standard_menu == 1) {
            $addclass = 'standard_menu';
        } else {
            $addclass = '';
        }
        if ($this->_isAccordion == TRUE)
            $html[] = '<span class="opener">&nbsp;</span>';

        if ($childrenWrapClass) {
            if (!$level) {
                $html[] = '<div class="' . $childrenWrapClass . '">';
            } else {
                $html[] = '<div class="' . $childrenWrapClass . '">';
            }
        }
        if ($level == 0) {
            $width_menu = Mage::getStoreConfig('megamenu/mainmenu/width_menu') - 20;
            $html[] = '<ul class="level' . $level . ' ' . $addclass . ' column' . $this->getLevle($id) . '" style="width:' . $width_menu . 'px;">';
        } else {
            $html[] = '<ul class="level' . $level . ' ' . $addclass . ' column' . $this->getLevle($id) . '">';
        }
        $html[] = $this->getBlockTop($megamenu);

        if ($level == 0) {
            if (isset($megamenu[0]) && $megamenu[0]['active_product'] == 1) {
                $numbers = $megamenu[0]['numbers_product'];
                $showproduct = $this->htmlshownumberproduct($category, $id, $numbers, $level);
                $html[] = $showproduct;
            }
            if ($this->getBlockLeft($megamenu)) {
                $classblock = ' menu-content';
            }
            $html[] = '<ul class=" level' . $level . $classblock . '">' . $this->getBlockLeft($megamenu);
            $html[] = $this->getBlockRight($megamenu);

            if (isset($megamenu[0]) && $megamenu[0]['category_children'] == 0) {
                if ($htmlChildren) {
                    if ($level == 0) {
                        $widthchildren = $this->width($id);
                        $html[] = '<div class="catagory_children" style="width:' . $widthchildren . 'px;">' . $htmlChildren . '</div>';

                    } else {
                        $html[] = '<div class="catagory_children column' . $this->getLevle($id) . '">' . $htmlChildren . '</div>';
                    }
                }
            }
        } else {

            if ($this->getBlockLeft($megamenu)) {
                $classblock = ' menu-content';
            }
            $html[] = '<ul class=" level' . $level . $classblock . '">' . $this->getBlockLeft($megamenu);
            if ($htmlChildren) {
                $idc = $category->parent_id;
                $widthchildren = $this->width($idc);

                $widthc = Mage::helper('megamenu')->Megamenu($id);
                if ($widthchildren == 0) {
                    $widthchildren = 1;
                }
                $left = (($widthc[0]['width_block_left'] + 10) / $widthchildren) * 100;
                $w = floor($widthp - $left);
                $widthchildrenc = ($w * $widthchildren) / 100;

                if ($showthumbnail == 1) {
                    if ($imgaes) {
                        $imageHtml = '<img class="thumbnail imgcateg" data-src="' . $imgaes . '" style="float: left;z-index: 1" alt="' . $category->getData("url_key") . '" />';
                    } else {
                        $imageHtml = '<div class="thumbnail"></div>';
                    }
                } else {
                    $imageHtml = '<div class="thumbnail"></div>';
                }

                if (($widthc[0]['active_static_block'] == 1) && ($widthc[0]['active_static_block_left'] == 1) && ($widthc[0]['active_static_block_right'] == 1)) {
                    $classchildren = 'leftrightchildren';
                    $html[] = '<div class="catagory_children ' . $classchildren . ' column' . $this->getLevle($id) . '" style="width:' . $widthchildrenc . 'px">' . $htmlChildren . $imageHtml . '</div>';
                } else if (($widthc[0]['active_static_block'] == 1) && ($widthc[0]['active_static_block_left'] == 1) && ($widthc[0]['active_static_block_right'] == 0)) {
                    $classchildren = 'leftchildren';
                    $html[] = '<div class="catagory_children ' . $classchildren . ' column' . $this->getLevle($id) . '" style="width:' . $widthchildrenc . 'px">' . $htmlChildren . $imageHtml . '</div>';
                } else if (($widthc[0]['active_static_block'] == 1) && ($widthc[0]['active_static_block_left'] == 0) && ($widthc[0]['active_static_block_right'] == 1)) {
                    $classchildren = 'rightchildren';
                    $html[] = '<div class="catagory_children ' . $classchildren . ' column' . $this->getLevle($id) . '" style="width:' . $widthchildrenc . 'px">' . $htmlChildren . $imageHtml . '</div>';
                } else {
                    $classchildren = '';
                    $html[] = '<div class="catagory_children ' . $classchildren . ' column' . $this->getLevle($id) . '">' . $htmlChildren . $imageHtml . '</div>';
                }

            }
            $html[] = $this->getBlockRight($megamenu);
            if (isset($megamenu[0]) && $megamenu[0]['active_product'] == 1) {
                $numbers = $megamenu[0]['numbers_product'];
                $showproduct = $this->htmlshownumberproduct($category, $id, $numbers, $level);
                $html[] = $showproduct;
            }
        }
        $html[] = '</ul>' . $this->getBlockBottom($megamenu);

        $html[] = '</ul>';
        if ($childrenWrapClass) {
            $html[] = '</div>';
        }
        $html[] = '</li>';
        $html = implode("\n", $html);
        return $html;
    }
}
