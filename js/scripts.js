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