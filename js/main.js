$(function() {


	// Swiper Block


	var swiperH = new Swiper('.swiper-container-h', {
		pagination: '.swiper-pagination-h',
		paginationClickable: true,
		slidesPerView: 'auto',
		// autoHeight: true,
		initialSlide: 1,
		centeredSlides: true,
		spaceBetween: 0,
		direction: 'horizontal',
		keyboardControl: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});


	// Leaflet Block


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


	// Main Block


	$('.menu-drop').children('.menu-item').on('click', function(event) {
		var position = $(this).attr('class').split(' ')[1];

		$('body').animate({
			'scrollTop': $('.content-item').filter('.' + position).offset().top
		}, 400);
	});


	$('.content-title, .head-name').on('click', function(event) {
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
		var percentY = (event.pageY - $this.offset().top) / $this.height() * 1.1 - 0.10;

		$this.scrollTop($this.children('.preview-body-inner').height() * percentY);
	});


	$(document).on('mousemove', '.preview-inner', function(event) {
		var $this = $(this);
		var percentY = (event.pageY - $this.offset().top) / $this.height() * 1.1 - 0.30;
		var percentX = (event.pageX - $this.offset().left) / $this.width() * 1.1 - 0.30;

		$this.scrollTop($this.children('img').height() * percentY);
		$this.scrollLeft($this.children('img').width() * percentX);
	});


	$(document).on('click', '.preview-image', function(event) {
		var path = $(this).attr('path');
		var $image = $('<img>', { 'src': path, 'onmousedown': 'return false' });

		$('body').animate({
			'scrollTop': $('.content-item.plan').offset().top
		}, 400);

		$('.content-preview-image').addClass('active').children('.preview-inner').append($image).scrollTop(0).scrollLeft(10000);
	});


	$(document).on('click', '.content-preview-image', function(event) {
		$(this).removeClass('active').children('.preview-inner').empty();
	});


	// $(document).on('keyup', function(event) {
	// 	if (event.altKey && (event.which = 81)) {
	// 		$('.content-item.plan').children('.content-inner').toggleClass('active');
	// 		$('.content-preview-image').removeClass('active');
	// 	}
	// });


	$(window).on('resize', function(event) {
		var height = $('.content-item.plan').height();

		$('.content-preview-image').height(height - 80);
		$('.preview-body').height(height - 280);
	}).trigger('resize');


	var $content_video = $('.content-item.video');
	var $player = $content_video.children('video');
	var $menu = $('.menu-items');
	$(document).on('scroll', function(event) {
		if ($(this).scrollTop() >= $content_video.height()) {
			if (!$player.hasClass('hidden')) $player.trigger('pause').addClass('hidden');
			$menu.addClass('fill');
		} else {
			if ($player.hasClass('hidden')) $player.removeClass('hidden').trigger('play');
			$menu.removeClass('fill');
		}
	});


});