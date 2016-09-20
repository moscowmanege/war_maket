$(function() {

	// Swiper

	var swiperV = new Swiper('.swiper-container-v', {
		pagination: '.swiper-pagination-v',
		paginationClickable: true,
		direction: 'vertical'
	});

	var swiperH = new Swiper('.swiper-container-h', {
		pagination: '.swiper-pagination-h',
		paginationClickable: true,
		slidesPerView: 'auto',
		// autoHeight: true,
		initialSlide: 1,
		centeredSlides: true,
		spaceBetween: 30,
		direction: 'horizontal'
	});

	// Leaflet

	var map = L.map('plan_map', { zoomControl: false, attributionControl: false }).setView([0, 0], 2);

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



	// Interact

	interact('.navigate_gap', { context: document }).draggable({
		axis: 'y',
		inertia: true,
		restrict: {
			restriction: 'parent',
			endOnly: true,
			elementRect: { left: 0, right: 0, top: 0, bottom: 1 },
		},
		onmove: function(event) {
			var $target = $(event.target);
			var y = (parseFloat($target.attr('data-y')) || 0) + event.dy;

			var delta_speed = Math.abs(y) / event.speed > 0.35;

			if (y >= 30 && delta_speed) {
				swiperV.slideNext();
			} else if (y <= -30 && delta_speed) {
				swiperV.slidePrev();
			}

			$target.css('transform', 'translateY(' + y + 'px)');
			$target.attr('data-y', y);
		}
	});

});