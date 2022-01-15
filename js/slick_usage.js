$(document).ready(function(){
	
	//slick_usage
	$('.portfolio-banner-1').slick({
		dots: true,
		infinite: false,
		autoplay:true,
		lazyLoad: 'ondemand'
			
	});
	$('.portfolio-banner-2').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		infinite: true,
		autoplay:true,
		lazyLoad: 'ondemand'
			
	});
	$('.portfolio-banner-3').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		speed: 900,
		infinite: true,
		autoplay:true,
		lazyLoad: 'ondemand'
			
	});
	$('.portfolio-banner-4').slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		dots: true,
		speed: 900,
		infinite: true,
		autoplay:true,
		variableWidth: true,
		centerMode: true,
		lazyLoad: 'ondemand'
			
	});
	$('.portfolio-banner-5').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		speed: 500,
		infinite: true,
		autoplay:true,
		lazyLoad: 'ondemand'
			
	});
	

});
