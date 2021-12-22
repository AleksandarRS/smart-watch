jQuery(function ($) {
   "use strict";
   var $window = $(window);
   var windowsize = $(window).width();
   var $root = $("html, body");
   var $this = $(this);


   /* ------- Smooth scroll ------- */
   $(document).on("click", "a.pagescroll", function (event) {
      event.preventDefault();
      $("html,body").animate({
         scrollTop: $(this.hash).offset().top
      }, 1200);
   });
   
   



});






