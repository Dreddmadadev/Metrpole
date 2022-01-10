document.observe("dom:loaded", function () {
    $$('input').each(function(element){
        if (element.disabled) {
            element.style["background-color"] = "#A1A1A1";
        }
    });
    var content = $(amgdpr_content);

    if (content.disabled) {
        content.style["background-color"] = "#A1A1A1";
    }
});