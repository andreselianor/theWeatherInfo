const url_sea = "https://api.open-meteo.com/v1/forecast?latitude=38.1917&longitude=-0.5658&hourly=pressure_msl,surface_pressure,visibility,wind_speed_10m&forecast_days=1"
let seaLevels;

async function getSeaLevelsDataFromURL() {
  await fetch(url_sea)
    .then(response => response.json())
    .then(data => {
      setSeaLevelsData(data)
    })
}

function setSeaLevelsData(data) {
  seaLevels = {
    seaPressure: data.hourly.pressure_msl[13],
    surfacePressure: data.hourly.surface_pressure[13],
    visibility: data.hourly.visibility[13],
    windSpeed: data.hourly.wind_speed_10m[13]
  }
}

function createSeaLevels() {
  resetCards();
  createCard("hPA", "Sea Pressure", seaLevels.seaPressure, ["sea3"]);
  createCard("hPA", "Sea surface Pressure", seaLevels.surfacePressure, ["sea3"]);
  createCard("m", "Visibility", seaLevels.visibility, ["sea3"]);
  createCard("km/h", "Wind Speed at 10m", seaLevels.windSpeed, ["sea3"]);
}

function resetCards() {
  cardRoot.textContent = "";
}

getSeaLevelsDataFromURL();
