

$(document).ready(function () {

	$('.lp-carousel__items').slick({
		dots: true,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	$('.modal__close').on('click', function () {
		$('.modal').hide();
		$('body').removeClass('no-scroll');
	});


	$('.open-modal--custom').on('click', function (e) {
		e.preventDefault();
		$('.modal--custom').show();
		$('body').addClass('no-scroll');
	});

	$('.open-modal--stock').on('click', function (e) {
		e.preventDefault();
		if ($(this).data('truck-number')) {
			$('.modal--stock').find('input[name="0-1/unit_model_name"]').val($(this).data('truck-number'));
		}
		$('.modal--stock').show();
		$('body').addClass('no-scroll');
	});


	$('.open-customizations').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		$('.lp-truck-interactive__customizations').slideToggle();
		$this.next().toggleClass('rotated');
	});

	const $hotspots = $('.lp-truck-interactive__hotspot');
	const $images = $('.lp-truck-interactive__image');
	const $defaultImage = $('.lp-truck-interactive__image[data-truck="0"]');

	$defaultImage.addClass('active');

	$hotspots.each(function () {
		const $hotspot = $(this);
		const toggleKey = $hotspot.data('toggle');

		$hotspot.find('button').on('click', function () {
			const isActive = $hotspot.hasClass('lp-truck-interactive__hotspot--active');

			$hotspots.removeClass('lp-truck-interactive__hotspot--active');
			$hotspots.find('button').html('+');
			$images.removeClass('active');

			if (!isActive) {
				$hotspot.addClass('lp-truck-interactive__hotspot--active');
				$hotspot.find('button').html('–');
				$(`.lp-truck-interactive__image[data-truck="${toggleKey}"]`).addClass('active');
			} else {
				$defaultImage.addClass('active');
			}
		});
	});




});
