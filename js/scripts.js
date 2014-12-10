
$(document).ready(function() {


//geolocation
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
$(document).ready(function() {
  
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
      
      
      // Output to hooks in HTML
      $(' .temp').text(weather.temp);
      $(' .city').text(weather.city+', '+weather.region);
      $(' .current').text(weather.currently);  
      $(' .image').html('<img src=' +weather.image +'>');
      $(' .header').text(weather.city);  
      $(' .high').text(weather.high+'/');
      $(' .low').text(weather.low);
      
      // See console for _weather_ object
      console.log(weather);
    }
  
  });
    
}; // end of _loadWeather()_ function
  


//Enter Zip

// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

// On click button, get zip, then run Simple Weather
$('button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      
      // Output to hooks in HTML
      $('.temp').text(weather.temp);
      $('.city').text(weather.city+', '+weather.region);
      $('.current').text(weather.currently);  
      $('.image').html('<img src=' +weather.image +'>');
      $('.header').text(weather.city);  
      $('.high').text(weather.high +'/');
      $('.low').text(weather.low);

      // See console for all properties of object
      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather').val('');
  
});




});


