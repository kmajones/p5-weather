

$.simpleWeather({
     zipcode:'',
    location: '',
    woeid: '2378872',
    unit: 'f',
    
    success: function(weather) {

     $('weathericon').text('<i class="icon-'+weather.code+'"></i>');  
     $('.city').text(weather.city); 
     $('.temp').text(weather.temp);
     $('.current').text(weather.currently);  
     $('.image').html('<img src=' +weather.image +'>');
     $('.header').text(weather.city);  
     $('.high').text(weather.high);
     $('.low').text(weather.low);
    
    $("#weather1").html(html);
    },
    
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

// Spokane

$.simpleWeather({
    zipcode:'',
    location: '2460029',
    woeid: '',
    unit: 'f',
    
    success: function(weather) {

     $('weathericon').text('<i class="icon-'+weather.code+'"></i>');  
     $('.city').text(weather.city); 
     $('.temp').text(weather.temp);
     $('.current').text(weather.currently);  
     $('.image').html('<img src=' +weather.image +'>');
     $('.header').text(weather.city);  
     $('.high').text(weather.high);
     $('.low').text(weather.low);
     
     $("#weather2").html();
    },
    
    error: function(error) {
      $("#weather2").html('<p>'+error+'</p>');
    }
  });
