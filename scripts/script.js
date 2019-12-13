//script to initialize and style Can-ALE map

//pass in mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NkaC1ncm91cCIsImEiOiJjanh6Mzg4azkwMGMwM2RsaDIzYjd6azFnIn0.BU150ucyg0_Zhm8OCvQ89w';

//create the mapboxGL map object with DOM container, map style (from mapbox account), center point, zoom limit, and default zoom level specified
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gsdh-group/ck44ku2t816i51cp3fzkqvnfb',
    center: [-91.830, 54.321],
    minZoom: 3.5,
    zoom: 3.5
});

//fade in and fade out scroll message
$(document).ready(function(){
		$(".scroll-message").delay(2000).fadeIn(1000).delay(1200).fadeOut(1000);
});
