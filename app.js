//console.log("hello world");


var apiKey = `df5617d2cffd20d7b7fcfcba640e52a3`
//zip variable like apiKey
var queryURL = `https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=${apiKey}`

function getWeather () {
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var bigDiv = `<div>`
        bigDiv.appendTo($("#containerDiv"))
    })
}

getWeather()