!function(i){i(document).ready(function(){function e(){i(".jcarousel_opinie").on("jcarousel:lastin","li",function(e,o){i(this).addClass("last")}).on("jcarousel:lastout","li",function(e,o){i(this).removeClass("last")}).on("jcarousel:firstin","li",function(){i(this).addClass("first")}).on("jcarousel:firstout","li",function(){i(this).removeClass("first")}).on("jcarousel:animate",function(e,o){i(".jcarousel_opinie li").removeClass("show")}).on("jcarousel:animateend",function(e,o){for(var s=i(".jcarousel_opinie > ul > li").filter(".first").eq(0).index(),n=i(".jcarousel_opinie > ul > li").filter(".last").eq(0).index(),t=s;t<=n;t++)i(".jcarousel_opinie > ul > li").removeClass("animate").eq(t).addClass("show")}).on("jcarousel:visibleout","li",function(e,o){i(this).removeClass("show")}).on("jcarousel:visiblein","li",function(e,o){i(this).addClass("show")}).on("jcarousel:reload jcarousel:create",function(){var e=i(this),o=e.innerWidth();o>=760?(o/=s,n=4):(o/=1,n=1),e.jcarousel("items").css("width",Math.ceil(o)+"px")}).jcarousel({animation:{duration:500,easing:"linear",complete:function(){}},wrap:"circular"})}var o=i(".jcarousel_opinie"),s=i(".jcarousel_opinie .front_items_list").data("items"),n=0;s=s>=4?4:i(".jcarousel_opinie .front_items_list").data("items"),i(window).resize(function(){e()}),e(),i(".jcarousel-control-prev").jcarouselControl({target:"-=1",carousel:o}),i(".jcarousel-control-next").jcarouselControl({target:"+=1",carousel:o}),i(".jcarousel_opinie > ul > li").removeClass("animate").eq(1).addClass("animate"),i(".jc_button").click(function(){i(".jcarousel_opinie > ul > li").filter(".first").eq(0).index()}),o.swipe({swipeLeft:function(e,o,s,n,t,l){i(this).parent().find(".jcarousel-control-next").click()},swipeRight:function(e,o,s,n,t,l){i(this).parent().find(".jcarousel-control-prev").click()}})})}(jQuery);