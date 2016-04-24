function getParameterByName(name, url) {
  "use strict";
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
    results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function initMap() {
  if(navigator.getlocation){
    navigator.geolocation.getCurrentPosition(function(position, philadelphia){
      philadelphia = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      console.log("loc");
    })
  } else {
    philadelphia = new google.maps.LatLng(39.9526,-75.1652);
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
  service.nearbySearch(request, function(results, status) {
    if(status == google.maps.places.PlacesServiceStatus.OK) {
      var infowindow = new google.maps.InfoWindow({
        content: "holding..."
      });
      for (var i=0; i < results.length; i++) {
        var place = results[i];
        console.log(place);
        var name = place.name + "\n\n" + place.vicinity;
        var marker = new google.maps.Marker({
          map: map,
          title:name,
          position: place.geometry.location
        });
        marker.addListener('click', function(){
          infowindow.setContent(this.title);
          infowindow.open(map, this);
        });
      }
    }
  });
}
