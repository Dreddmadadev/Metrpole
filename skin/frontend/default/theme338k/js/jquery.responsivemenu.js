!function(d){d.fn.responsiveMenu=function(i){i=d.extend({autoArrows:!1},i);return this.each(function(){var a=d(this),s=d(window),n=function(){768<s.width()?a.addClass("dropdown").removeClass("accordion").find("li:has(ul)").removeClass("accorChild"):a.addClass("accordion").find("li:has(ul)").addClass("accorChild").parent().removeClass("dropdown")};s.resize(function(){n(),a.find("ul").css("display","none")}),n(),a.addClass("responsive-menu").find("a").live("click",function(s){var n=d(this).next("ul,div");if(a.hasClass("accordion")&&0<n.length)return n.slideToggle(),!1}).stop().siblings("ul").parent("li").addClass("hasChild"),i.autoArrows&&d(".hasChild > a",a).find("strong").append('<span class="arrow">&nbsp;</span>')})}}(jQuery);