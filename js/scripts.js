var cheney = "99004";
var spokane = "99201";

$.simpleWeather({
    
    location: 'spokane',
    woeid: '',
    unit: 'f',
    
    success: function(weather) {
     $('.temp').text(weather.temp);
     $('.current').text(weather.currently);  
     $('.header').text(weather.city);  
    },
    
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

//Geolocation 

// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

// 1. Check for Geolocation
// REF: http://codepen.io/fleeting/pen/Idsaj
// Browser support geolocation?  
  if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show(); 
  } else {
    // No. Hide button
    $('.getGeolocation').hide();
  }

// 2. Get Geolocation & return Simple Weather
$('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
});

// 3. Wrap SimpleWeather in a function called _loadWeather()
var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      
      // See console for _weather_ object
      console.log(weather);
    }
  
  });
    
}; // end of _loadWeather()_ function



