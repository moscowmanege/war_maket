$(document).ready(function() {

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


	var data = [
		{"type":"Feature","properties":{ "theme": "war", "description": "Hall 1", "color": "red", "fillColor": "red" },"geometry":{"type":"Polygon","coordinates":[[[-54.66796875,-5.266007882805498],[-95.44921875,-59.80063426102868],[-131.484375,-46.92025531537451],[-136.93359375,-44.465151013519616],[-143.96484375,-40.71395582628604],[-148.88671874999997,-37.020098201368114],[-152.9296875,-32.99023555965107],[-156.4453125,-27.527758206861886],[-159.08203125,-21.125497636606266],[-160.6640625,-14.94478487508836],[-161.19140625,-8.928487062665504],[-161.19140625,-4.039617826768424],[-160.3125,1.2303741774326145],[-159.43359375,5.266007882805498],[-157.67578125,10.833305983642491],[-155.21484375,15.623036831528264],[-152.75390624999997,19.80805412808859],[-149.23828125,23.725011735951796],[-146.25,26.43122806450644],[-142.20703125,29.84064389983444],[-137.109375,32.54681317351517],[-130.60546875,35.31736632923788],[-125.33203125,36.73888412439431],[-119.17968749999999,37.71859032558813],[-112.1484375,38.13455657705411],[-104.0625,37.579412513438385],[-96.6796875,35.88905007936091],[-91.0546875,33.87041555094183],[-85.078125,31.20340495091737],[-58.53515625,16.13026201203477],[-32.34375,0.7031073524364909],[-40.78125,-13.2399454992863],[-54.66796875,-5.266007882805498]]]}},
		{"type":"Feature","properties":{ "theme": "war", "description": "Hall 2", "color": "yellow", "fillColor": "yellow" },"geometry":{"type":"Polygon","coordinates":[[[-24.873046874999996,-55.92458580482951],[-44.033203125,-71.52490903732816],[-50.625,-70.37785394109224],[-57.12890625,-69.09993967425088],[-69.9609375,-66.40795547978848],[-82.880859375,-63.35212928507874],[-95.537109375,-59.88893689676582],[-87.1875,-51.94426487902876],[-72.421875,-56.8970039212726],[-60.29296874999999,-43.389081939117496],[-24.873046874999996,-55.92458580482951]]]}},
		{"type":"Feature","properties":{ "theme": "city", "description": "Hall 3", "color": "green", "fillColor": "green" },"geometry":{"type":"Polygon","coordinates":[[[-6.064453125,-30.826780904779774],[-23.115234374999996,-53.956085530987885],[-58.53515625,-40.91351257612757],[-32.51953125,0.7031073524364909],[13.886718749999998,-23.725011735951796],[6.50390625,-36.244273184939075],[-6.064453125,-30.826780904779774]]]}},
		{"type":"Feature","properties":{ "theme": "city", "description": "Hall 4", "color": "blue", "fillColor": "blue" },"geometry":{"type":"Polygon","coordinates":[[[40.078125,-48.69096039092549],[47.109375,-37.99616267972812],[13.886718749999998,-23.563987128451217],[-6.6796875,-53.956085530987885],[27.773437499999996,-62.99515845212052],[32.87109375,-57.7041472343419],[39.19921875,-59.355596110016315],[46.23046874999999,-50.736455137010644],[40.078125,-48.69096039092549]]]}},
		{"type":"Feature","properties":{ "theme": "war", "description": "Hall 5", "color": "lightblue", "fillColor": "lightblue" },"geometry":{"type":"Polygon","coordinates":[[[25.224609375,-65.10914820386473],[15.292968749999998,-72.63337363853837],[10.107421874999998,-75.5411125578113],[7.646484374999999,-76.80073870685206],[4.921875,-77.95241384715754],[-1.318359375,-77.31251993823142],[-7.470703125,-76.61890051654557],[-13.7109375,-75.90950400691686],[-19.6875,-75.11822201684025],[-44.033203125,-71.52490903732816],[-36.298828125,-66.26685631430843],[-23.203125,-68.942606818121],[-9.31640625,-56.75272287205735],[25.224609375,-65.10914820386473]]]}},
		{"type":"Feature","properties":{ "theme": "memory", "description": "Hall 6", "color": "purple", "fillColor": "purple" },"geometry":{"type":"Polygon","coordinates":[[[105.99609375,-55.77657301866769],[99.31640625,-54.21386100064492],[92.7685546875,-52.48278022207821],[86.044921875,-50.68079714532164],[79.62890625,-48.86471476180277],[72.94921875,-46.8000594467873],[66.533203125,-44.77793589631622],[59.94140624999999,-42.553080288955805],[53.61328124999999,-40.3130432088809],[43.76953125,-54.1109429427243],[38.935546875,-59.66774058164961],[34.013671875,-64.32087157990324],[60.99609375,-69.22499685411589],[88.330078125,-73.04823634299835],[96.94335937499999,-66.08936427047087],[109.951171875,-68.17155518732501],[116.19140625,-61.73152565113397],[103.447265625,-58.995311187950925],[105.99609375,-55.77657301866769]]]}},
		{"type":"Feature","properties":{ "theme": "memory", "description": "Hall 7", "color": "aqua", "fillColor": "aqua" },"geometry":{"type":"Polygon","coordinates":[[[43.9453125,-69.9001176266854],[57.568359375,-71.93815765811694],[71.279296875,-73.72659470212253],[84.990234375,-75.27541260821626],[68.02734375,-82.66507258051301],[53.78906249999999,-81.82379431564337],[46.7578125,-81.36128726057068],[39.46289062499999,-80.88675843015636],[25.400390625,-79.81230226556366],[11.42578125,-78.57790682347503],[16.875,-76.10079606754577],[10.634765625,-75.32002523220802],[17.666015625,-71.01695975726373],[24.08203125,-72.01972876525514],[30.322265625000004,-67.5421666883853],[43.9453125,-69.9001176266854]]]}}
	];


	// Layer War


	var layer_war = L.geoJson(data, {
		style: function(feature) {
			return { weight: 2, fillOpacity: 0.4, color: 'gold', fillColor: 'gold' };
		},
		filter: function(feature) {
			return feature.properties.theme == 'war';
		}
	})
	.on('click', function(e) {
		map.setView(e.latlng);
	})
	.on('mouseover', function(e) {
		this.setStyle({
			color: 'green',
			fillColor: 'green'
		});
	})
	.on('mouseout', function(e) {
		this.setStyle({
			color: 'gold',
			fillColor: 'gold'
		});
	});


	// Layer City


	var layer_city = L.geoJson(data, {
		style: function(feature) {
			return { weight: 2, fillOpacity: 0.4, color: 'pink', fillColor: 'pink' };
		},
		filter: function(feature) {
			return feature.properties.theme == 'city';
		}
	})
	.on('click', function(e) {
		map.setView(e.latlng);
	})
	.on('mouseover', function(e) {
		this.setStyle({
			color: 'green',
			fillColor: 'green'
		});
	})
	.on('mouseout', function(e) {
		this.setStyle({
			color: 'pink',
			fillColor: 'pink'
		});
	});


	// Layer Memory


	var layer_memory = L.geoJson(data, {
		style: function(feature) {
			return { weight: 2, fillOpacity: 0.4, color: 'blue', fillColor: 'blue' };
		},
		filter: function(feature) {
			return feature.properties.theme == 'memory';
		}
	})
	.on('click', function(e) {
		map.setView(e.latlng);
	})
	.on('mouseover', function(e) {
		this.setStyle({
			color: 'green',
			fillColor: 'green'
		});
	})
	.on('mouseout', function(e) {
		this.setStyle({
			color: 'blue',
			fillColor: 'blue'
		});
	});

	var themes_group = L.layerGroup([layer_war, layer_city, layer_memory]);


	// Layer Halls


	var layer_halls = L.geoJson(data, {
		style: function(feature) {
			return { weight: 2, fillOpacity: 0.4, color: feature.properties.color, fillColor: feature.properties.fillColor };
		},
		onEachFeature: function (feature, layer) {
			layer.on('mouseover', function(e) {
				this.setStyle({
					color: 'white',
					fillColor: 'white'
				});
			});

			layer.on('mouseout', function(e) {
				this.setStyle({
					color: feature.properties.color,
					fillColor: feature.properties.fillColor
				});
			});

			layer.on('click', function(e) {
				map.setView(e.latlng);
				// alert(feature.properties.description);
			});

		}
	}).addTo(map);

	var baseMaps = {
		'Темы': themes_group,
		'Залы': layer_halls
	};

	L.control.layers(baseMaps, null, { position: 'bottomleft' }).addTo(map);

});