const url_isDay = "https://api.open-meteo.com/v1/forecast?latitude=-30,39.4739,40.4165,-33.8678&longitude=-71,-0.3797,-3.7026,151.2073&hourly=is_day&forecast_days=1";
let isDay;

async function getIsDayDataFromURL() {
  await fetch(url_isDay)
    .then(response => response.json())
    .then(data => {
      setNightAndDayData(data)
    })
}

function setNightAndDayData(data) {
  let now = new Date();
  let hour = now.getHours();
  nightAndDay = {
    chile: data[0].hourly.is_day[hour],
    valencia: data[1].hourly.is_day[hour],
    madrid: data[2].hourly.is_day[hour],
    sydney: data[3].hourly.is_day[hour]
  }
}

function createNightAndDay() {
  resetCards();
  createCard("Chile", "Chile is night", nightAndDay.chile);
  createCard("Valencia", "Valencia is bright", nightAndDay.valencia);
  createCard("Madrid", "Madrid is bright", nightAndDay.madrid);
  createCard("Sydney", "Sydney is night", nightAndDay.sydney);
}

function resetCards() {
  cardRoot.textContent = "";
}

getIsDayDataFromURL();
