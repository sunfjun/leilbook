/**
 * University Omi
 *
 * This file contains all template JS functions
 *
 * @package Omi University
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------

 * 01 - Search
 * 02 - Counter
 * 03 - Mailchimp

--------------------------------------------------------------*/

(function($) {
  "use strict";

	// Search
    $('.search-icon').on('click', function (e) {
      e.preventDefault();
      $('.search').addClass('active');
    });
    $('.search-close').on('click', function (e) {
      e.preventDefault();
      $('.search').removeClass('active');
    });

    // Counter
  	$.fn.jQuerySimpleCounter = function( options ) {
		    var settings = $.extend({
		        start:  0,
		        end:    100,
		        easing: 'swing',
		        duration: 3500,
		        complete: ''
		    }, options );

		    var thisElement = $(this);

		    $({count: settings.start}).animate({count: settings.end}, {
				duration: settings.duration,
				easing: settings.easing,
				step: function() {
					var mathCount = Math.ceil(this.count);
					thisElement.text(mathCount);
				},
				complete: settings.complete
			});
		};
		$('#number1').jQuerySimpleCounter({end: 55,duration: 900});
		$('#number2').jQuerySimpleCounter({end: 985,duration: 3500});
		$('#number3').jQuerySimpleCounter({end: 1000,duration: 3800});
		$('#number4').jQuerySimpleCounter({end: 500,duration: 1700});

	// Mailchimp Form
    $('#newsletter-form').ajaxChimp({
        url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
    });

})(jQuery);