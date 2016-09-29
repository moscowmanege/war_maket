$(function() {

	$('.menu-items.left').children('.menu-item').on('click', function() {
		var position = $(this).attr('class').split(' ')[1];

		$('body').animate({
			'scrollTop': $('.content-item').filter('.' + position).offset().top - 40
		}, 400);

		return false;
	});

	var $video = $('.content-item.video');
	$(document).on('scroll', function() {
		if ($(this).scrollTop() >= $video.height()) {
			$('video', $video).trigger('pause').hide();
		} else {
			$('video', $video).show().trigger('play');
		}
	});

	// Swiper

	var swiperH = new Swiper('.swiper-container-h', {
		pagination: '.swiper-pagination-h',
		paginationClickable: true,
		slidesPerView: 'auto',
		// autoHeight: true,
		initialSlide: 1,
		centeredSlides: true,
		spaceBetween: 0,
		direction: 'horizontal',
		keyboardControl: true
	});

	// Leaflet

	var map = L.map('plan-canvas', { scrollWheelZoom: false, zoomControl: false, attributionControl: false }).setView([0, 0], 2);

	L.tileLayer('img/tiles/{z}/image_tile_{y}_{x}.jpg', {
		minZoom: 1,
		maxZoom: 4,
		attribution: '',
		tileSize: '256',
		tms: false,
		continuousWorld: true,
		reuseTiles: true
	}).addTo(map);

	L.control.zoom({ position: 'bottomleft' }).addTo(map);


});