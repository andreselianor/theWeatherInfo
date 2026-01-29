const url_temperatures = "https://api.open-meteo.com/v1/forecast?latitude=38.3452&longitude=-0.4815&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth&forecast_days=1";
let jsonData;
let cardRoot = document.getElementById("cards");
let temperatureInfo, humidityInfo, precipitationInfo;

async function getTemperatureDataFromURL() {
    await fetch(url_temperatures)
        .then(response => response.json())
        .then(data => {
            setTemperatureInfo(data)
            setHumidityInfo(data)
            setPrecipitationInfo(data)
            createWelcomeTitle();
        })
}

function setTemperatureInfo(data) {
    temperatureInfo = {
        temperature_9: data.hourly.temperature_2m[10],
        temperature_12: data.hourly.temperature_2m[13],
        temperature_15: data.hourly.temperature_2m[16],
        temperature_17: data.hourly.temperature_2m[18],
        temperature_20: data.hourly.temperature_2m[21],
        temperature_22: data.hourly.temperature_2m[23]
    }
}

function setHumidityInfo(data) {
    humidityInfo = {
        humidity_9: data.hourly.relative_humidity_2m[10],
        humidity_12: data.hourly.relative_humidity_2m[13],
        humidity_15: data.hourly.relative_humidity_2m[16],
        humidity_17: data.hourly.relative_humidity_2m[18],
        humidity_20: data.hourly.relative_humidity_2m[21],
        humidity_22: data.hourly.relative_humidity_2m[23]
    }
}

function setPrecipitationInfo(data) {
    precipitationInfo = {
        precipitation_9: data.hourly.precipitation_probability[10],
        precipitation_12: data.hourly.precipitation_probability[13],
        precipitation_15: data.hourly.precipitation_probability[16],
        precipitation_17: data.hourly.precipitation_probability[18],
        precipitation_20: data.hourly.precipitation_probability[21],
        precipitation_22: data.hourly.precipitation_probability[23]
    }
}

function createTuristCards() {
    resetCards();
    createCard("Temperature C°", "Temperature at 10AM", temperatureInfo.temperature_9,["suncat"] );
    createCard("Temperature C°", "Temperature at 13PM", temperatureInfo.temperature_12,["suncat"]);
    createCard("Temperature C°", "Temperature at 16PM", temperatureInfo.temperature_15,["suncat"]);
    createCard("Temperature C°", "Temperature at 18PM", temperatureInfo.temperature_17,["suncat"]);
    createCard("Temperature C°", "Temperature at 21PM", temperatureInfo.temperature_20);
    createCard("Humidity %", "Humidity at 22PM", humidityInfo.humidity_22);
}

function createWelcomeTitle() {
    let welcome = document.createElement("h3");
    welcome.textContent = "Select an Ecosystem";
    cardRoot.append(welcome);
}
function resetCards() {
    cardRoot.textContent = "";
}

getTemperatureDataFromURL();
