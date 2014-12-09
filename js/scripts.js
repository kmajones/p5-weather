
$(document).ready(function() {
  $.simpleWeather({
    zipcode: '',
    woeid: '2486340', //2357536
    location: '',
    unit: 'f',
    success: function(weather) {
     $('#weather1 .temperature').text(weather.temp+weather.units.temp);
     //$(' #weather1 .weathericon').text('<i class="icon-'+weather.code+'"></i>');  
     $('#weather1 .city').text(weather.city); 
     $('#weather1 .temp').text(weather.temp);
     $('#weather1 .current').text(weather.currently);  
     $('#weather1 .image').html('<img src=' +weather.image +'>');
     $('#weather1 .header').text(weather.city);  
     $('#weather1 .high').text(weather.high);
     $('#weather1 .low').text(weather.low);

     $('#weather1 .day1').text(weather.forecast[1].high);

      //html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
     
      $("#weather1").html();
    },
    error: function(error) {
      $("#weather1").html('<p>'+error+'</p>');
    }
  });
  

});


