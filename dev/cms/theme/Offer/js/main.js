jQuery(document).ready(function($) {

	"use strict";

	
	$('#OfferShort').submit(function(){
		$("body").addClass("loading");
        $('.error-message').remove();
		var dataSubmit = $(this).serializeArray();
		$("#error_message").html('');
		
		setTimeout(function () {
				
			$.ajax({
				type    :   'POST',
				url     :   '/Signup/offer',
				data    :   dataSubmit,
				dataType:   'json',
				async   :   false,
				success :   function(validationResponse){
					
					if(validationResponse.Res == 'error'){


						$("#error_message").html(validationResponse.Msg);

						$.each(validationResponse.ResCustomer, function(fieldName, message){

							var element = $("input[name='data[Customer]["+fieldName+"]']");

							element.parent('div').find('.error-message').remove();

							var create = $(document.createElement('div')).insertAfter(element);
							create.addClass('error-message').html(message[0]);

						});
						
						if(validationResponse.ResUser != undefined){
							$.each(validationResponse.ResUser, function(fieldName, message){

								var element = $("input[name='data[User]["+fieldName+"]']");

								element.parent('div').find('.error-message').remove();

								var create = $(document.createElement('div')).insertAfter(element);
								create.addClass('error-message').html(message[0]);

							});						
						}


						$.each(validationResponse.ResCard, function(fieldName, message){

							var element = $("input[name='data[CreditCard]["+fieldName+"]']");

							element.parent('div').find('.error-message').remove();

							var create = $(document.createElement('div')).insertAfter(element);
							create.addClass('error-message').html(message[0]);

						});
						
						
						$("body").removeClass("loading");


					} else {
					

						if(validationResponse.Res === 'ok'){
							document.location.href = validationResponse.Link;											
						}
							
					
					}

				},
				error   :   function(jqXHR, textStatus, errorThrown){
					console.log(jqXHR+'-----'+textStatus+'-----'+errorThrown);
				}
			});			
			
			
			
		}, 200);
			 

				

            return false;
			
    });
	
   $(document).on("click", "a.pagescroll", function (event) {
      event.preventDefault();
      $("html,body").animate({
         scrollTop: $(this.hash).offset().top
      }, 1200);
   });

	$('.btn-back-to-top').click(function() {     
		$('body,html').animate({
			scrollTop :  $('#top').offset().top   
		}, 500);
	});	
	
	$("#close-viewing").on("click", function(event) {
		$("#viewing-lp").remove();
		event.preventDefault();
	});
	
	$('.phone_number').inputmask({"mask": "+1 (999) 999-9999"}); 
	$('#CreditCardCcNumber').inputmask({"mask": "9999 9999 9999 9999"}); 

	
});


 $(document).on('change', '.cart-country-shipping', function () {

	var country_id = $(this).val();

	var url = "/country_manager/state_provinces/ajaxGetStateProvinces";
	$.ajax({
		url: url,
		data: {
			country_id: country_id
		},
		type: "POST"

	}).done(function (data) {

		var state_provinces = $.parseJSON(data);

		var $el = $("#CustomerShippingStateId");

		$el.empty(); // remove old options
		$.each(state_provinces, function (value, key) {
			$el.append($("<option></option>")
					.attr("value", value).text(key));
		});
	});
});

$(document).on('change', '.cart-country-billing', function () {

	var country_id = $(this).val();

	var url = "/country_manager/state_provinces/ajaxGetStateProvinces";
	$.ajax({
		url: url,
		data: {
			country_id: country_id
		},
		type: "POST"

	}).done(function (data) {

		var state_provinces = $.parseJSON(data);

		var $el = $("#CustomerBillingStateId");

		$el.empty(); // remove old options
		$.each(state_provinces, function (value, key) {
			$el.append($("<option></option>")
					.attr("value", value).text(key));
		});
	});
});


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

		if(display != null){
		    display.textContent = minutes + ":" + seconds;
	
		}      

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


window.onload = function () {
    var fiveMinutes = 60 * 12,
        display = document.querySelector('#stopwatch');
        display2 = document.querySelector('.stopwatch2');
    startTimer(fiveMinutes, display);
    startTimer(fiveMinutes, display2);


};