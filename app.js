$(document).ready(function(){


    $(`#btn`).on("click", function(e){
    e.preventDefault()
    var zip = $("#myText").val();

var apiKey = `df5617d2cffd20d7b7fcfcba640e52a3`
var queryURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var cityname = $(`<p>${response.name}</p>`)
        $("#cityname").append(cityname);

        var temperature = $(`<p>${response.main.temp}</p>`)
        $("#humidity").append(temperature);

        var humidity = $(`<p>${response.main.humidity}</p>`)
        $("#humidity").append(humidity);

        var windspeed = $(`<p>${response.wind.speed}</p>`)
        $("#windspeed").append(windspeed);

        /*var uvindex = $(`<p>${response.main.humidity}</p>`)
        $("#uvindex").append(uvindex);*/
    });

    var forecastURL = `https://openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${apiKey}`
    $.ajax({
        url: forecastURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
​
        if(response.list) {
            for(var forecastCount = 0; forecastCount < response.list.length; forecastCount++) {
                
                var forcastListItem = response.list[forecastCount];
​
                if(forcastListItem.dt_txt.includes("12:00:00")) {
                    var pTag = $("<p>");
                    pTag.text(forcastListItem.main.temp);
                    $("#forecast").append(pTag);
                }
            }
        }
​
        /*var uvindex = $(`<p>${response.main.humidity}</p>`)
        $("#uvindex").append(uvindex);*/
    });

    /*if(myText ! = ""){


    }else{
        $("#error").html('Field Cannot Be Empty')
    }*/

    });


});