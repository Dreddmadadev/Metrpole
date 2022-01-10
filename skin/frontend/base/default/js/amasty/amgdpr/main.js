document.observe("dom:loaded", function () {
    Event.on(
        document.body,
        'click',
        '#amprivacy-checkbox a, #amprivacy-popup .cross',
        togglePrivacyPopup
    );

    var policyButton = $$('[data-role="accept-policy"]');

    if (0 < policyButton.length) {
        policyButton[0].observe('click', acceptPolicy);
    }

    function togglePrivacyPopup(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
            $('amprivacy-popup').toggle();
        }
    }

    function acceptPolicy(e) {
        var checkbox = $$('#amprivacy-checkbox input[type="checkbox"]');
        checkbox.forEach(function (box) {
            box.checked = true;
            box.dispatchEvent(new Event('change'));
        });

        togglePrivacyPopup(e);
    }
});
