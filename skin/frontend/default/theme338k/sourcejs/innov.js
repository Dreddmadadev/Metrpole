jQuery(document).ready(function () {
    jQuery(window).on('load resize', function() {
        slickInnov();
    });
});

function slickInnov() {
    if (jQuery(window).width() <= 651) {
        jQuery('.product-innov-container').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false
        });
    } else {
        jQuery('.product-innov-container').slick('unslick');
    }
}