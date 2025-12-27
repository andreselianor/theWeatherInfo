

var content = document.getElementById("content");
var URL = "https://api.open-meteo.com/v1/forecast?latitude=38&longitude=0.48&hourly=temperature_2m";

function getWeather() {
    fetch(URL)
        .then(response => response.json())
        .then(data => showData(data))
}

function showData(data) {
    console.log(data);
    content.innerHTML = data.hourly.temperature_2m;
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