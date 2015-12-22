$(document).ready(function(){

    getWeatherByCity("en", showError, "", 5);

    var weekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        $("#searchCity").click(function(e){
            e.preventDefault();
            $("#alldays").empty();

            var getVal = $(this).prev("input").val();
            getWeatherByCity("en", showError, getVal);
        });

        function getWeatherByCity(lang, fnError, cityName) {

            $.get("http://ipinfo.io", function(response) {
            if (cityName == '') {
                cityName = response.city;
            }

            $.getJSON(
                'http://api.openweathermap.org/data/2.5/forecast/daily?q='
                + cityName + '&APPID=85dd9ac97b8b9d0cbc5f814a5b96ffa6&cnt=16&units=metric' + '&lang=' + lang + '&callback=?',
                function (data) {
                    var v = data.list;

                    // first day
                    var getDay1 = (new Date(v[0].dt*1000)).getDay();
                    $(".firstDay h2").text(weekArray[getDay1]);
                    $(".firstDay img").attr("src", 'png/'+v[0].weather[0].icon+'.png');
                    $(".firstDay li").eq(0).text(v[0].weather[0].description);
                    $(".firstDay li").eq(1).text('Wind: '+Math.round(v[0].speed)+'km/h');
                    $(".firstDay li").eq(2).text('Humidity: '+v[0].humidity+'%');

                    // second day
                    var getDay2 = (new Date(v[1].dt*1000)).getDay();
                    $(".secondDay h2").text(weekArray[getDay2]);
                    $(".secondDay img").attr("src", 'png/'+v[1].weather[0].icon+'.png');
                    $(".secondDay li").eq(0).text(v[1].weather[0].description);
                    $(".secondDay li").eq(1).text('Wind: '+Math.round(v[1].speed)+'km/h');
                    $(".secondDay li").eq(2).text('Humidity: '+v[1].humidity+'%');

                    // third day
                    var getDay3 = (new Date(v[2].dt*1000)).getDay();
                    $(".thirdDay h2").text(weekArray[getDay3]);
                    $(".thirdDay img").attr("src", 'png/'+v[2].weather[0].icon+'.png');
                    $(".thirdDay li").eq(0).text(v[2].weather[0].description);
                    $(".thirdDay li").eq(1).text('Wind: '+Math.round(v[2].speed)+'km/h');
                    $(".thirdDay li").eq(2).text('Humidity: '+v[2].humidity+'%');

                    // fourth day
                    var getDay4 = (new Date(v[3].dt*1000)).getDay();
                    $(".fourthDay h2").text(weekArray[getDay4]);
                    $(".fourthDay img").attr("src", 'png/'+v[3].weather[0].icon+'.png');
                    $(".fourthDay li").eq(0).text(v[3].weather[0].description);
                    $(".fourthDay li").eq(1).text('Wind: '+Math.round(v[3].speed)+'km/h');
                    $(".fourthDay li").eq(2).text('Humidity: '+v[3].humidity+'%');

                    // fifth day
                    var getDay5 = (new Date(v[4].dt*1000)).getDay();
                    $(".fifthDay h2").text(weekArray[getDay5]);
                    $(".fifthDay img").attr("src", 'png/'+v[4].weather[0].icon+'.png');
                    $(".fifthDay li").eq(0).text(v[4].weather[0].description);
                    $(".fifthDay li").eq(1).text('Wind: '+Math.round(v[4].speed)+'km/h');
                    $(".fifthDay li").eq(2).text('Humidity: '+v[4].humidity+'%');
                }
            );

            }, "jsonp");
        }


        function showError(msg){
            $('#error').html('An error occured: ' + msg);
        }

});