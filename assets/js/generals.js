$( document ).ready(function() {
	
	$('.especiales-bote-dos').hide();
	$('.especiales-bote-tres').hide();

	$('.alula-bote-dos').hide();
	$('.alula-bote-tres').hide();

	$('.nubes-comfort-dos').hide();
	$('.nubes-comfort-tres').hide();


	setTimeout(function () {
		$('.especiales-bote-dos').show();
		$('.alula-bote-dos').show();
		$('.nubes-comfort-dos').show();
		$('.especiales-bote-uno').attr('src', 'media/images/bote-uno_.png');
		$('.alula-bote-uno').attr('src', 'media/images/bebe-tres-n-.png');
		//$('.lata-uno').addClass('glow');
	}, 800);
	setTimeout(function () {
		$('.especiales-bote-tres').show();
		$('.alula-bote-tres').show();
		$('.nubes-comfort-tres').show();
		$('.especiales-bote-dos').attr('src', 'media/images/bote-dos_.png');
		$('.alula-bote-dos').attr('src', 'media/images/bebe-dos-nuevo-.png');

		//$('.lata-uno').addClass('glow');
	}, 1600);
	setTimeout(function () {
		$('.especiales-bote-tres').attr('src', 'media/images/bote-tres_.png');
		$('.alula-bote-tres').attr('src', 'media/images/bebe-tres-nuevo-.png');

		//$('.lata-uno').addClass('glow');
	}, 2400);




});
