!function(u){u.fn.tmStickUp=function(o){var t={correctionSelector:u(".correctionSelector")};u.extend(t,o);var e,c,s=u(this),i=u(window),r=u(document),n=0,l=0,p=0,a=0;n=parseInt(s.offset().top),parseInt(s.css("margin-top")),l=parseInt(s.outerHeight(!0)),u('<div class="pseudoStickyBlock"></div>').insertAfter(s),(e=u(".pseudoStickyBlock")).css({position:"relative",display:"block"}),r.on("scroll",function(){c=u(this).scrollTop(),a<c?"down":"up",a=c,correctionValue=t.correctionSelector.outerHeight(!0),p=parseInt(i.scrollTop()),n-correctionValue<p?(s.addClass("isStuck"),s.css({position:"fixed",top:correctionValue}),e.css({height:l})):(s.removeClass("isStuck"),s.css({position:"relative",top:0}),e.css({height:0}))}).trigger("scroll")}}(jQuery);