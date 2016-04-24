function initMap() {
  var philadelphia = new google.maps.LatLng(navigator.geolocation.getCurrentPosition(function(position){
    return(position.coords.latitude, position.coords.longitude);
  }));

  var map = new google.maps.Map(document.getElementById('map'), {
    center: philadelphia,
    zoom: 15,
    scrollwheel: false
  });

  var request = {
    location: philadelphia,
    radius: '500',
    types: ['store']
  };

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function(results, status) {
    if(status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i=0; i < results.length; i++) {
        var place = results[i];
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
      }
    }
  });
}
