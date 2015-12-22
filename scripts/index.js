$(function() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
});

function locationSuccess(position)
{
    var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+
    '&lon='+position.coords.longitude+'&APPID=b5eb1f7fc74c772602241ba72db33987&callback=?';
    $.getJSON(weatherAPI, function(response)
    {
       $('#loc').html(response.city.name);
         $('#icon').attr("src", 'png/'+response.list[0].weather[0].icon+'.png');
         $('#currenttemp').html(parseInt(response.list[0].main.temp - 273.15)+'&deg;C');
         $('#now-description').html(response.list[0].weather[0].description);
         $('#now-wind').text('Wind: '+Math.round(response.list[0].wind.speed)+'km/h');
         $('#now-humidity').text('Humidity: '+response.list[0].main.humidity+'%');
     });
}

function locationError(error) {
    console.warn('Error:' + error.message);
}

