
$(document).ready(function() {
  $.simpleWeather({
    zipcode: '99026',
    woeid: '12799444', //2357536
    location: '',
    unit: 'f',
    success: function(weather) {
     $('#weather1 .temperature').text(weather.temp+weather.units.temp);
     //$(' #weather1 .weathericon').text('<i class="icon-'+weather.code+'"></i>');  
     $('#weather1 .city').text(weather.city+', '+weather.region); 
     $('#weather1 .temp').text(weather.temp);
     $('#weather1 .current').text(weather.currently);  
     $('#weather1 .image').html('<img src=' +weather.image +'>');
     $('#weather1 .header').text(weather.city);  
     $('#weather1 .high').text(weather.high);
     $('#weather1 .low').text(weather.low);

     $('#weather1 .day1').text(weather.forecast[1].high);
     $('#weather1 .day2').text(weather.forecast[2].high);
     
      //html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
     
      $("#weather1").html();
    },
    error: function(error) {
      $("#weather1").html('<p>'+error+'</p>');
    }
  });

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
      $('#weather2 .temp').text(weather.temp);
      $('#weather2 .city').text(weather.city+', '+weather.region);
      $('#weather2 .current').text(weather.currently);  
      $('#weather2 .image').html('<img src=' +weather.image +'>');
      $('#weather2 .header').text(weather.city);  
      $('#weather2 .high').text(weather.high);
      $('#weather2 .low').text(weather.low);
      
      // See console for _weather_ object
      console.log(weather);
    }
  
  });
    
}; // end of _loadWeather()_ function
  

  //accordion
  $('.ui.accordion')
  .accordion()
;



});


