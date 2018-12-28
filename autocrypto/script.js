$(document).ready(function(){




	$(document).ready(function(){

		var currentSlide = 1;
	    var slider = $('.carousal');
	    var container = slider. find('.carousalContainer');
	    var slide = container.find('.slide');
	    function startSlider(){
	    		interval = setInterval(function(){
	    			$('.carousalContainer').animate({
	    				'margin-left': '-=500px'
	    				},1000, function(){
	    					currentSlide++;
	    					if(currentSlide == '.slide'.length){
	    						currentSlide = 1;
	    						container.css({'margin-left':'0'});
	    					}
	    				});
	    		        }, 2000);
	                   }

		function stopSlider(){
			clearInterval(interval);
		}
	     
	  slide.on('mouseenter', stopSlider).on('mouseleave', startSlider);
	  startSlider();

	    var $header = $('.header');
	    var $window = $(window);



	    function headerbg(){
	    	var window_height = $(window).height();
	    	var headerheight = $('header').outerHeight();
	    	var window_top_position = $window.scrollTop();
	    	var headerbottom = (window_height - headerheight);
	    	$.each($header, function() {
	    		if(headerbottom <= window_top_position){
	    			$header.addClass('headerbg');
	    		} else{
	    			$header.removeClass('headerbg');
	    		}
	    	});

	    }
	    $window.on('scroll resize', headerbg);

	      });

});