!function(s){s.fn.productListGalleryThumbs=function(){return this.each(function(){s(this).find(".product-thumbs");s(this).find(".product-thumb a").click(function(t){t.preventDefault();var i=s(this).find("img").attr("src");s(this).closest(".product-image-container").find(".product-image img").stop().fadeOut(200,function(){s(this).attr("src",i),s(this).fadeIn(200)}),s(this).addClass("active"),s(this).parent().siblings().find("a").removeClass("active")})})}}(jQuery),jQuery(document).ready(function(){jQuery(".products-grid").productListGalleryThumbs(),jQuery(".products-list").productListGalleryThumbs()});