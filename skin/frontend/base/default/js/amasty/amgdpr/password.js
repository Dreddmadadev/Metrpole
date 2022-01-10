document.observe("dom:loaded", function () {
    $$('[type*="checkbox"').each(function(element){
        element.observe('click', function () {
            var currentForm = this.parentNode.parentNode;

            if(this.checked === true){
                currentForm.getElementsByClassName('password')[0].removeAttribute('hidden');

                if(document.getElementsByClassName('validation-advice')[0]){
                    currentForm.getElementsByClassName('validation-advice')[0].remove();
                }
            } else {
                currentForm.getElementsByClassName('password')[0].setAttribute('hidden', true);
            }
        });
    });
});
