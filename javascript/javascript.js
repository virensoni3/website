/* This function below called initmap() has a variable called uluru. The latitude and longitude 
are defined so that it pinpoints to the specific location, in this case Leicester. initmap() is in 
global scope so that the callback for the google map api works.    */

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


function initMap() {
  let uluru = {
    lat: 52.629780,
    lng: -1.139370
  };
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  let marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}


var x = 0;

// this is the function which translates the text into French
function translatefunc() {
  

  

  if (x%2==0) {
    document.getElementById("translate").innerHTML="English";
  }
  else {
    document.getElementById("translate").innerHTML="Francais";
  }
  x++

  //document.getElementById("hello").innerHTML="Hindi";
  window.location.reload();
}



// jquery for the menu (fade in and fade out)
$(document).ready(function(){

$('#fadeOut').click(function(){
    $('#navbar').fadeOut(700);
  });

$('#fadeIn').click(function(){
    $('#navbar').fadeIn(700);
  }); 
});


//jquery for the loading animation
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut(3000);
});

$(window).on("load",function(){
  $(".loader").fadeOut(1500);
});






/* Below is the function for the responsive hamburger menu. I have used this example from W3 schools.
The link is: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp. It has been modified so that there is
let instead of var */
(function() {
	
	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
	function myFunction() {
	    let x = document.getElementById("myTopnav");
	    if (x.className === "topnav") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav";
	    }
	}

    // There is an event listener so when a user clicks on the responsive menu, it runs myFunction.
	document.getElementById('icon').addEventListener('click', myFunction);

})();