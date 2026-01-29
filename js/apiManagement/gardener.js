const url_gardener = "https://api.open-meteo.com/v1/forecast?latitude=1&longitude=38&hourly=soil_temperature_6cm,soil_moisture_3_to_9cm,temperature_2m,relative_humidity_2m,precipitation_probability&forecast_days=1";
let gardener;

async function getGardenerDataFromURL() {
  await fetch(url_gardener)
    .then(response => response.json())
    .then(data => {
      setGardenerData(data)
    })
}

function setGardenerData(data) {
  gardener = {
    soil_6cm: data.hourly.soil_temperature_6cm[10],
    soil_moisture: data.hourly.soil_moisture_3_to_9cm[10],
    temperature_2m: data.hourly.temperature_2m[10],
    humidity: data.hourly.relative_humidity_2m[10],
    precipitation: data.hourly.precipitation_probability[10]
  }
}

function createGardener() {
  resetCards();
  createCard("Temperature C°", "Kenya soil temperature", gardener.soil_6cm);
  createCard("Moisture m³/m³", "Kenya moisture", gardener.soil_moisture);
  createCard("Temperature C°", "Kenya temperature", gardener.temperature_2m);
  createCard("Humidity %", "Kenya humidity air", gardener.humidity);
  createCard("Precipitation %", "Kenya rain probability", gardener.precipitation);
}

function resetCards() {
  cardRoot.textContent = "";
}

getGardenerDataFromURL();
