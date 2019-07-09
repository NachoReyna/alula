$( document ).ready(function() {
	


	$('.alula-bote-dos').hide();
	$('.alula-bote-tres').hide();

	$('.nubes-comfort-dos').hide();
	$('.nubes-comfort-tres').hide();


	$('.dos').hide();
	$('.tress').hide();
	$('.cinco').hide();
	$('.seis').hide();
	


	setTimeout(function () {

		var dos = '<img src="media/images/bote-dos.png" alt="" class="especiales-bote-dos img-fluid">';
		$('.dos-botes').append(dos);

		$('.dos').show();
		$('.cinco').show();

		$('.alula-bote-dos').show();
		$('.nubes-comfort-dos').show();
		$('.especiales-bote-uno').attr('src', 'media/images/bote-uno_.png');
		$('.alula-bote-uno').attr('src', 'media/images/bebe-tres-n-.png');
		//$('.lata-uno').addClass('glow');
	}, 800);
	setTimeout(function () {
		var tres = '<img src="media/images/bote-tres.png" alt="" class="especiales-bote-tres img-fluid">';
		$('.tres').append(tres);

		$('.tress').show();
		$('.seis').show();

		$('.alula-bote-tres').show();
		$('.nubes-comfort-tres').show();
		$('.alula-bote-dos').attr('src', 'media/images/bebe-dos-nuevo-.png');

		//$('.lata-uno').addClass('glow');
	}, 1600);
	setTimeout(function () {
		$('.especiales-bote-tres').attr('src', 'media/images/bote-tres_.png');
		$('.alula-bote-tres').attr('src', 'media/images/bebe-tres-nuevo-.png');

		//$('.lata-uno').addClass('glow');
	}, 2400);




});
