//script to initialize and style Can-ALE map

//pass in mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NkaC1ncm91cCIsImEiOiJjanh6Mzg4azkwMGMwM2RsaDIzYjd6azFnIn0.BU150ucyg0_Zhm8OCvQ89w';

//create the mapboxGL map object with DOM container, map style (from mapbox account), center point, zoom limit, and default zoom level specified
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gsdh-group/cjy4sm7q502611emkkiw0ugnr',
    center: [-73.7, 45.56],
    minZoom: 8.5,
    zoom: 8.5
});

//fade in and fade out scroll message
$(document).ready(function(){
		$(".scroll-message").delay(2000).fadeIn(1000).delay(1200).fadeOut(1000);
});