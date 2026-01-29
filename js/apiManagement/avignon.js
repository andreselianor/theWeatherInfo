const url_avignon = "https://api.open-meteo.com/v1/forecast?latitude=43.9483&longitude=4.8089&daily=cloud_cover_mean,cloud_cover_max,cloud_cover_min,wind_speed_10m_mean,wind_speed_10m_min,winddirection_10m_dominant&hourly=wind_speed_10m&forecast_days=1";
let avignon;

async function getAvignonDataFromURL() {
  await fetch(url_avignon)
    .then(response => response.json())
    .then(data => {
      setAvignonData(data)
    })
}

function setAvignonData(data) {
  avignon = {
    cloud_max: data.daily.cloud_cover_max[0],
    cloud_mean: data.daily.cloud_cover_mean[0],
    cloud_min: data.daily.cloud_cover_min[0],
    wind_min: data.daily.wind_speed_10m_min[0],
    wind_mean: data.daily.wind_speed_10m_mean[0],
    wind_max: data.hourly.wind_speed_10m[10]
  }
}

function createAvignon() {
  resetCards();
  createCard("Cloud cover %", "Avignon min clouds", avignon.cloud_min);
  createCard("Cloud cover %", "Avignon mean clouds", avignon.cloud_mean);
  createCard("Cloud cover %", "Avignon max clouds", avignon.cloud_max);
  createCard("Wind speed km/h", "Avignon wind min", avignon.wind_min);
  createCard("Wind speed km/h", "Avignon wind mean", avignon.wind_mean);
  createCard("Wind speed km/h", "Avignon wind max", avignon.wind_max);
}

function resetCards() {
  cardRoot.textContent = "";
}

getAvignonDataFromURL();
