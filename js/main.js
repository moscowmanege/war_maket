$(function() {

	// Swiper

	var swiperH = new Swiper('.swiper-container-h', {
		pagination: '.swiper-pagination-h',
		paginationClickable: true,
		slidesPerView: 'auto',
		// autoHeight: true,
		initialSlide: Math.ceil(($('.swiper-slide').length / 2) - 1),
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

	// Main

	$('.menu-drop').children('.menu-item').on('click', function() {
		var position = $(this).attr('class').split(' ')[1];

		$('body').animate({
			'scrollTop': $('.content-item').filter('.' + position).offset().top
		}, 400);
	});

	$('.content-title, .head-name').on('click', function() {
		var $this = $(this);

		if ($this.hasClass('head-name')) {
			var index = $this.index('.head-name');
			swiperH[0].slideTo(index, 400);
		}

		$('body').animate({
			'scrollTop': $this.closest('.content-item').offset().top
		}, 400);
	});

	$(document).on('mousemove', '.preview-body', function(event) {
		var $this = $(this);
		var percent = (event.pageY - $this.offset().top) / $this.height() * 1.1 - 0.30;
		$this.scrollTop($this.children('.preview-body-inner').height() * percent);
	});

	$(document).on('click', '.preview-image', function() {
		var path = $(this).attr('path');

		$('body').animate({
			'scrollTop': $('.content-item.plan').offset().top
		}, 400);

		$('.content-preview-image').addClass('active').children('.preview-inner').css('background-image', 'url(' + path + ')');
	});

	$(document).on('click', '.content-preview-image', function() {
		$(this).removeClass('active');
	});

	$(window).on('resize', function() {
		var height = $('.content-item.plan').height();
		$('.content-preview-image').height(height - 80);
		$('.preview-body').height(height - 280);
	}).trigger('resize');

	var $content_video = $('.content-item.video');
	var $player = $content_video.children('video');
	var $menu = $('.menu-items');
	$(document).on('scroll', function() {
		if ($(this).scrollTop() >= $content_video.height()) {
			if (!$player.is(':hidden')) $player.trigger('pause').hide();
			$menu.addClass('fill');
		} else {
			if ($player.is(':hidden')) $player.show().trigger('play');
			$menu.removeClass('fill');
		}
	});

});