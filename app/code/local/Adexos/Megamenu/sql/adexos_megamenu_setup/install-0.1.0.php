<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */
$this->startSetup();

//Include in menu category level 5
$this->run('
SET @includeInMenu = (SELECT attribute_id FROM eav_attribute WHERE attribute_code = \'include_in_menu\');
UPDATE `catalog_category_entity_int` ccei
INNER JOIN `catalog_category_entity` cce
ON cce.entity_id = ccei.entity_id AND cce.level = 5
SET ccei.`value`= 1
WHERE ccei.attribute_id = @includeInMenu;
UPDATE `admin_menutop` SET `level_column_count` = 0 WHERE 1;
');

$this->endSetup();
