var map_style =
[{"featureType": "all", "elementType": "labels.text.fill", "stylers": [{"saturation": 36 }, {"color": "#000000"}, {"lightness": 40 } ] }, {"featureType": "all", "elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16 } ] }, {"featureType": "all", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}, {"lightness": 20 } ] }, {"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#000000"}, {"lightness": 17 }, {"weight": 1.2 } ] }, {"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 20 } ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#232526"} ] }, {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 21 } ] }, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}, {"lightness": 17 } ] }, {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"color": "#000000"}, {"lightness": 29 }, {"weight": 0.2 } ] }, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 18 } ] }, {"featureType": "road.local", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 16 } ] }, {"featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 19 } ] }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#232526"}, {"lightness": 17 } ] } ];

function initialize() {
	var mapLatlng = new google.maps.LatLng(55.7313885, 37.506783);
	var pointLatlng = new google.maps.LatLng(55.730386, 37.503704);

	var mapOptions = {
		zoom: 17,
		center: mapLatlng,
		styles: map_style,
		scrollwheel: false,
		mapTypeControl: false,
		zoomControl: true,
		streetViewControl: false,
		// draggable: false,
		zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.LEFT_BOTTOM
		}
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

	var infowindow = new google.maps.InfoWindow({
			content: 'Центральный музей Великой Отечественной войны'
	});

	var marker = new google.maps.Marker({
			position: pointLatlng,
			map: map,
			title: 'Центральный музей Великой Отечественной войны'
	});

	google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
	});

	infowindow.open(map, marker);
}

google.maps.event.addDomListener(window, 'load', initialize);