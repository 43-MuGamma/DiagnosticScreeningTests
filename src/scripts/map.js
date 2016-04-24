'use strict';

function initMap() {
  if (navigator.getlocation) {
    navigator.geolocation.getCurrentPosition(function (position, philadelphia) {
      philadelphia = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      console.log("loc");
    });
  } else {
    var philadelphia = new google.maps.LatLng(39.9526, -75.1652);
    console.log("no loc");
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    center: philadelphia,
    zoom: 15,
    scrollwheel: false
  });

  var request = {
    location: philadelphia,
    radius: '500',
    types: ['physiotherapist']
  };

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var infowindow = new google.maps.InfoWindow({
        content: "holding..."
      });
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        var name = place.name + "\n\n" + place.vicinity;
        var marker = new google.maps.Marker({
          map: map,
          title: name,
          position: place.geometry.location
        });
        marker.addListener('click', function () {
          infowindow.setContent(this.title);
          infowindow.open(map, this);
        });
      }
    }
  });
}