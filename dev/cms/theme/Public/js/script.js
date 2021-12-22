(function ($) {
	"use strict";
	var $window = $(window);
	var windowsize = $(window).width();
	var $root = $("html, body");
	var $this = $(this);

    jQuery(document).ready(function($){

        // contextual links
        $('a.contextual-links-trigger').click(function(e) {
          e.preventDefault();
          $(this).next(".contextual-links").toggle();
        });

        // back to top
		$('#btn-back-to-top').click(function() {     
			$('body,html').animate({
				scrollTop : 0   
			}, 500);
		});
		
		  $window.scroll(function () {
			 var $scroll = $window.scrollTop();
			 if ($scroll > 50) {
				$('#btn-back-to-top').fadeIn(200); 
				$('.navbar').addClass('navbar_bg');
			 } else {
				 $('#btn-back-to-top').fadeOut(200);
				 $('.navbar').removeClass('navbar_bg');
				
			 }
		  });
/*		
		$("#sidebar").mCustomScrollbar({
			theme: "minimal"
		});
*/
		$('#dismiss, .overlay').on('click', function () {
			$('#sidebar').removeClass('active');
			$('.overlay').removeClass('active');
			$("body").removeClass("full-page"); 
		});

		$('.nav-link.cart').on('click', function () {
			$('#sidebar').addClass('active');
			$('.overlay').addClass('active');
			$("body").addClass("full-page");
			$('.collapse.in').toggleClass('in');
			$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		});
		
	
    });
    
   	$(document).on('click','#keep_shopping',function(){
		$( "#dismiss" ).trigger( "click" );
	});
	
    jQuery(document).ready(function($){
	
    $('.video-bg').owlCarousel({
        items:1,
        merge:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
		 navigation: true,
		loop: false,
      });


	/*
	  var owl = $('.video-bg');
	  owl.owlCarousel({
		  loop:true,
		  margin:10,
		  nav:false,
		  dots:false,
		  center:true,
		  items:1
	  })
	  owl.on('translate.owl.carousel',function(e){
		$('.owl-item video').each(function(){
		  $(this).get(0).pause();
		});
	  });
	  owl.on('translated.owl.carousel',function(e){
		$('.owl-item.active video').get(0).play();
	  })

		$('.owl-item .item').each(function(){
		  var attr = $(this).attr('data-videosrc');
		  if (typeof attr !== typeof undefined && attr !== false) {
			var videosrc = $(this).attr('data-videosrc');
			$(this).prepend('<video muted><source src="'+videosrc+'" type="video/mp4"></video>');
		  }
		});
		$('.owl-item.active video').attr('autoplay',true).attr('loop',true);
*/
	});
}(jQuery));
