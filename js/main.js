$(function() {

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
		keyboardControl: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
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
		var percent = (event.pageY - $this.offset().top) / $this.height() * 1.1 - 0.10;
		$this.scrollTop($this.children('.preview-body-inner').height() * percent);
	});


	var requestId;
	var deltaY = 0;
	var deltaX = 0;
	var $preview = $('.preview-inner');
	$(document).on('click', '.preview-image', function() {
		var path = $(this).attr('path');
		var $image = $('<img>', { 'src': path, 'onmousedown': 'return false' });

		$('body').animate({
			'scrollTop': $('.content-item.plan').offset().top
		}, 400);

		$('.content-preview-image').trigger('click').addClass('active').children('.preview-inner').append($image);


		var h = $preview[0].scrollHeight;
		var w = $preview[0].scrollWidth;

		deltaY = 0;
		deltaX = 0;

		$preview
			.off()
			.on('mousemove', function(e) {
				var parentOffset = $(this).parent().offset();

				var y = (e.pageY - parentOffset.top) - h / 2;
				deltaY = y * 0.025;

				var x = (e.pageX - parentOffset.left) - w / 2;
				deltaX = x * 0.025;
			})
			.on('blur mouseleave', function(e) {
				deltaX = 0;
				deltaY = 0;
			});

		cancelAnimationFrame(requestId);
		(function step() {
			deltaY && $preview.scrollTop(function(i, v) { return v + deltaY; });
			deltaX && $preview.scrollLeft(function(i, v) { return v + deltaX; });

			requestId = requestAnimationFrame(step);
		})();

	});

	$(document).on('click', '.content-preview-image', function() {
		$(this).removeClass('active').children('.preview-inner').empty();
		$preview.off();

		cancelAnimationFrame(requestId);
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