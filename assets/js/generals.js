$( document ).ready(function() {
	$('.alula-bote-dos').hide();
	$('.alula-bote-tres').hide();

	$('.nubes-comfort-dos').hide();
	$('.nubes-comfort-tres').hide();

	$('.dos').hide();
	$('.tress').hide();
	$('.cinco').hide();
	$('.seis').hide();
	

	$('.bote-nube-dos').hide();
	$('.bote-nube-tres').hide();


	setTimeout(function () {
		var dos = '<img src="media/images/bote-dos.png" alt="" class="especiales-bote-dos img-fluid">';
		$('.dos-botes').append(dos);

		var botesUno = '<img src="media/images/bebe-dos-nuevo.gif" class="img-fluid animated pulse" style="max-width: 115%;" alt="">';
		$('.bote-bebe-dos').append(botesUno);
		$('.bote-nube-dos').show();

		var especialesDos = '<img src="media/images/lat.gif" alt="" class="img-fluid">';
		$('.bote-especiales-dos').append(especialesDos);
		
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

		var botesDos = '<img src="media/images/bebe-tres-nuevo.gif" class="img-fluid animated pulse" style="max-width: 115%;" alt="">';
		$('.bote-bebe-tres').append(botesDos);
		$('.bote-nube-tres').show();

		var especialesTres = '<img src="media/images/bote-tres.gif" alt="" class="img-fluid">';
		$('.bote-especiales-tres').append(especialesTres);

		$('.bebe-dos').show();

		$('.tress').show();
		$('.seis').show();

		$('.alula-bote-tres').show();
		$('.nubes-comfort-tres').show();
		$('.alula-bote-dos').attr('src', 'media/images/bebe-dos-nuevo-.png');
	}, 1600);
	setTimeout(function () {
		$('.especiales-bote-tres').attr('src', 'media/images/bote-tres_.png');
		$('.alula-bote-tres').attr('src', 'media/images/bebe-tres-nuevo-.png');

		$('.bebe-tres').show();
		
	}, 2400);




});
