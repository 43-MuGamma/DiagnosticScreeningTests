<script>
	var depression_data_db = new Firebase('https://depressiondata.firebaseio.com/'); //DB for tracking and handling depression score data
	
	//Generic Google API Geolocation algorithm w/ Places Library location snippets
	function initMap() {
		  var map = new google.maps.Map(document.getElementById('map'), {
			      center: {lat: -34.397, lng: 150.644},
			      zoom: 6
		  });
		  var infoWindow = new google.maps.InfoWindow({map: map});

		  // HTML5 geolocation.
		  if (navigator.geolocation) {
		     	navigator.geolocation.getCurrentPosition(function(position) {
		      		var pos = {
		    	 	        lat: position.coords.latitude,
  	                          	lng: position.coords.longitude
		      	   	};
		      
		           	infoWindow.setPosition(pos);
		      	   	infoWindow.setContent('Location found.');
		      	   	map.setCenter(pos);
				
				//Modified Places Library API algorithm
		  		var request = {
					location: pos,
    					radius: '500',
    					query: "'depression', 'therapy'"
  	          		};
		  
  	          		service = new google.maps.places.PlacesService(map);
  		  		service.textSearch(request, callback);
			
		  		function callback(results, status) {
  		  			if (status == google.maps.places.PlacesServiceStatus.OK) {
    						for (var i = 0; i < results.length; i++) {
      							var place = results[i];
      							createMarker(results[i]);
    						}
  					}                                                     
		  		}

		    	}, 
			function() {
		           	handleLocationError(true, infoWindow, map.getCenter());
		        });
    		  } else {// Browser doesn't support Geolocation
		           handleLocationError(false, infoWindow, map.getCenter());
		  }
	}
	
	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		infoWindow.setPosition(pos);
		infoWindow.setContent(browserHasGeolocation ?
			'Error: The Geolocation service failed.' :
			'Error: Your browser doesn\'t support geolocation.');                                                                                                                                      }
</script>
