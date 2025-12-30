

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
    node1.textContent = "C°: " + data.daily.temperature_2m_mean[0];
    node2.textContent = "R%: " + data.daily.precipitation_probability_mean[0];
    node3.textContent = "code: " + data.daily.weather_code[0];
}

getWeather();

class MyFooter extends HTMLElement {
    connectedCallback() {
        fetch("./html/footer.html")
            .then(response => response.text())
            .then(html => this.innerHTML = html)
    }
}


customElements.define("my-footer", MyFooter);