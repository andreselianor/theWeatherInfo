const url_sunrise = "https://api.open-meteo.com/v1/forecast?latitude=34.0522,40.7143,48.8534,41.8919&longitude=-118.2437,-74.006,2.3488,12.5113&daily=sunrise&forecast_days=1";
let sunrise;

async function getSunriseDataFromURL() {
  await fetch(url_sunrise)
    .then(response => response.json())
    .then(data => {
      setSunriseData(data)
    })
}

function setSunriseData(data) {
  sunrise = {
    losAngeles: data[0].daily.sunrise[0],
    nuevaYork: data[1].daily.sunrise[0],
    paris: data[2].daily.sunrise[0],
    rome: data[3].daily.sunrise[0]
  }
}

function createSunrise() {
  resetCards();
  createCard("Hollywood", "Los Angeles have breakfast when you are", sunrise.losAngeles.slice(-4));
  createCard("Atlantic City", "Nueva York have breakfast when you are", sunrise.nuevaYork.slice(-4));
  createCard("Rio Sena", "Paris have breakfast when you are", sunrise.paris.slice(-4));
  createCard("Cinecitta", "Rome have breakfast when you are", sunrise.rome.slice(-4));
}

function resetCards() {
  cardRoot.textContent = "";
}

getSunriseDataFromURL();
