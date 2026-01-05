

var content = document.getElementById("content");
var URL = "https://api.open-meteo.com/v1/forecast?latitude=38&longitude=0.48&hourly=temperature_2m";
var URL2 = "https://api.open-meteo.com/v1/forecast?latitude=38.34&longitude=0.43&daily=temperature_2m_mean,precipitation_probability_mean,weather_code";

var today = new Date();
var todayDay = today.getDate();
var todayMonth = today.getMonth() + 1;
var todayYear = today.getFullYear();
console.log(todayDay, todayMonth, todayYear);

function getWeather() {
    fetch(URL2)
        .then(response => response.json())
        .then(data => showData(data))
}

function showData(data) {
    console.log(data);
    console.log(data.daily.temperature_2m_mean[0]);
    console.log(data.daily.precipitation_probability_mean[0]);
    console.log(data.daily.weather_code[0]);

    let node1 = document.getElementById("temperature");
    let node2 = document.getElementById("precipitation");
    let node3 = document.getElementById("weatherCode");

    node1.innerHTML =
        `<p class="cardData">${data.daily.temperature_2m_mean[0]}°</p>
        <p class="cardInfo">temperature</p>
    `
    node2.innerHTML =
        `<p class="cardData">${data.daily.precipitation_probability_mean[0]}%</p>
        <p class="cardInfo">precipitation</p>
    `
    if (data.daily.weather_code[0] != null) {
        let codeWeather = displayWeatherCode(data.daily.weather_code[0]);
        node3.innerHTML =
            `<p class="cardData"><img class="logo movingWeatherLogo" src="../media/icons/${codeWeather}"></p>
        <p class="cardInfo">weather code</p>
    `
    }
}
function displayWeatherCode(code) {
    if (code == 0 || code == 1 || code == 2)
        return "icon-sun.svg";
    if (code == 3)
        return "icon-cloudy.svg";
    if (code == 61 || code == 63 || code == 65)
        return "icon-rain.svg";
    if (code == 81 || code == 81 || code == 82)
        return "icon-rain-showers.svg";
    if (code == 71 || code == 73 || code == 75)
        return "icon-snow.svg";
    if (code == 45 || code == 48 || code == 75)
        return "icon-fog.svg";
    return "icon-sun.svg";
}

getWeather();

/*
0	Clear sky
1, 2, 3	Mainly clear, partly cloudy, and overcast
45, 48	Fog and depositing rime fog
51, 53, 55	Drizzle: Light, moderate, and dense intensity
56, 57	Freezing Drizzle: Light and dense intensity
61, 63, 65	Rain: Slight, moderate and heavy intensity
66, 67	Freezing Rain: Light and heavy intensity
71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent
85, 86	Snow showers slight and heavy
95 *	Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail
*/