var selectedElement;
jQuery(document).ready(function () {
    selectedElement = jQuery("#product_id").val();
    checkedInput();



});

function checkedSelected(e) {

    var id = selectedElement.split(',');

    if(id.indexOf(jQuery(e).val()) != "-1"){
        var index = id.indexOf(jQuery(e).val());
        id.splice(index, 1);
    }else{
        id.push(jQuery(e).val());
    }

    selectedElement = id.join(',');
    jQuery('#product_id').val(id.join(','));

}

function checkedInput() {

    if(selectedElement != ""){
        var valSelectedArray = selectedElement.split(',');
        valSelectedArray.each(function (e) {
            if(e != ""){
                var selecter = '#productGrid_table .checkbox[value=' + e + ']';
                jQuery(selecter).prop('checked', true);
            }
        });
    }


}
