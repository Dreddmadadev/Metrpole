<?php
/**
 * This file is part of the Adexos package.
 * (c) Adexos <contact@adexos.fr>
 */

$installer = $this;
$installer->startSetup();

$address = '{{depend prefix}}{{var prefix}} {{/depend}}{{var firstname}} {{depend middlename}}{{var middlename}} {{/depend}}{{var lastname}}{{depend suffix}} {{var suffix}}{{/depend}}|
{{depend company}}{{var company}}|{{/depend}}
{{if street1}}{{var street1}}
{{/if}}
{{depend street2}}{{var street2}}|{{/depend}}
{{depend street3}}{{var street3}}|{{/depend}}
{{depend street4}}{{var street4}}|{{/depend}}
{{if postcode}}{{var postcode}}, {{if city}}{{var city}},|{{/if}}
{{if region}}{{var region}}{{/if}}
{{var country}}|
{{depend telephone}}T: {{var telephone}}{{/depend}}|
{{if email}}{{var email}}{{/if}}|
{{depend fax}}<br/>F: {{var fax}}{{/depend}}|
{{depend vat_id}}<br/>VAT: {{var vat_id}}{{/depend}}|';

Mage::getConfig()->saveConfig('customer/address_templates/pdf', $address, 'default', 0);

$installer->endSetup();
