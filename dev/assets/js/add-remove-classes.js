$(document).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            $(".site-header").addClass("header-animated");
        } else {
            $(".site-header").removeClass("header-animated");
        }
    });
});