$(function() {

	// Swiper

	var swiper = new Swiper('.content_block', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		wrapperClass: 'content_inner',
		slideClass: 'scroll_block',
		direction: 'vertical'
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

			if (y >= 30) {
				swiper.slideNext();
			} else if (y <= -30) {
				swiper.slidePrev();
			}

			// var $body = $('body');
			// if (y > 30) {
			// 	$body.scrollTop($body.scrollTop() + $body.height());
			// } else if (y <= -30) {
			// 	$body.scrollTop($body.scrollTop() - $body.height());
			// }

			// var $body = $('body');
			// requestAnimationFrame(function() {
			// 	$body.scrollTop($body.scrollTop() + y);
			// });

			$target.css('transform', 'translateY(' + y + 'px)');
			$target.attr('data-y', y);
		}
	});

});