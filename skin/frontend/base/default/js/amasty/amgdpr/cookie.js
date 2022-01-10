document.observe("dom:loaded", function () {
    var cookieBlock = document.getElementById('amgdpr-cookie-block');

    if (!Mage.Cookies.get('amgdpr_allow_cookies') && cookieBlock) {
        cookieBlock.style.display = "block";
    }
});