
	function find_myloc(){
		
		var output = document.getElementById("out");
		
		if(!navigator.geolocation){
			output.innerHTML = "Geolocation is not support your system !"
			return;
		}
		function success(position){
			var latitude = position.coords.latitude;
			var longitude =	position.coords.longitude;
			//output.innerHTML = "latitude vale is " + latitude + " and longitude value is " + longitude;
        
            var img = new Image();
			 img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + " , " + longitude + "&zoom=15&size=600x600&sensor=false";
			 output.appendChild(img);	
			 //output.innerHTML = "latitude vale is " + latitude + " and longitude value is " + longitude;
		}
		function error(){
			output.innerHTML = "Unable to find your location..";
		}
			output.innerHTML = "Locating...";
			navigator.geolocation.getCurrentPosition(success, error);
	}
