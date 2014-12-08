var cheney = "99004";
var spokane = "99201";
var ninemilefalls = "99201";

$.simpleWeather({
    
    location: 'cheney',
    woeid: '',
    unit: 'f',
    
    success: function(weather) {

     $('weathericon').text('<i class="icon-'+weather.code+'"></i>');   
     $('.temp').text(weather.temp);
     $('.current').text(weather.currently);  
     $('.image').html('<i class="icon-'+weather.code+'"></i> I am testing this');
     $('.header').text(weather.city);  
    },
    
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
