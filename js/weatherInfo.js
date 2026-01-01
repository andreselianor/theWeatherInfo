

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
        node3.innerHTML =
            `<p class="cardData"><img class="logo" src="../media/icons/icon-sun.svg"></p>
        <p class="cardInfo">weather code</p>
    `
    }
}
getWeather();