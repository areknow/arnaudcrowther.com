function initializeMap() {
    var map_canvas = document.getElementById('map_canvas');
    var latlang = new google.maps.LatLng(42.460592, -83.134648);
    var map_options = {
        center: latlang,
        zoom: 12,
        scrollwheel: false,
        scaleControl: true,
        disableDefaultUI: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(map_canvas, map_options)
    var image = "res/mark.png";
    var marker = new google.maps.Marker({
        position: latlang,
        map: map
    });
//    var contentString = "";
//    var infowindow = new google.maps.InfoWindow({
//        content: contentString
//    });		
//    google.maps.event.addListener(marker, "click", function() {
//      infowindow.open(map,marker);
//    });
    var styles = [{
    stylers: [{ 
        saturation: -60 }]},{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        }
    ];
    map.setOptions({styles: styles}); 
    
}

