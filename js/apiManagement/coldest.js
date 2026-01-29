const url_coldest = "https://api.open-meteo.com/v1/forecast?latitude=62.0339&longitude=129.7331&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall&forecast_days=1";
let coldest;

async function getColdestDataFromURL() {
  await fetch(url_coldest)
    .then(response => response.json())
    .then(data => {
      setColdestData(data)
    })
}

function setColdestData(data) {
  coldest = {
    temperature: data.current.temperature_2m,
    humidity: data.current.relative_humidity_2m,
    aparentTemperature: data.current.apparent_temperature,
    day: data.current.is_day,
    windSpeed: data.current.wind_speed_10m,
    windDirection: data.current.wind_direction_10m,
    windGusts: data.current.wind_gusts_10m,
    precipitation: data.current.precipitation,
    rain: data.current.rain,
    showers: data.current.showers,
    snowfall: data.current.snowfall
  }
}

function createColdest() {
  resetCards();
  createCard("Temperature C°", "Yakutsk temperature", coldest.temperature, ["snowflake1"]);
  createCard("Humidity %", "Yakutsk humidty", coldest.humidity, ["snowflake1"]);
  createCard("Termic Sensation C°", "Yakutsk termic sensation", coldest.aparentTemperature, ["snowflake1"]);
  createCard("is daytime?", "Yakutsk daytime", coldest.day);
  createCard("Wind Speed km/h", "Yakutsk wind speed", coldest.windSpeed);
  createCard("Wind Direction °", "Yakutsk wind direction", coldest.windDirection);
  createCard("Wind Gusts km/h", "Yakutsk wind gusts", coldest.windGusts);
  createCard("Precipitation mm", "Yakutsk precipitation", coldest.precipitation, ["cloudrain"]);
  createCard("Rain mm", "Yakutsk rain", coldest.rain);
  createCard("Showers mm", "Yakutsk showers", coldest.showers);
  createCard("Snowfall mm", "Yakutsk snowfall", coldest.snowfall);
}

function resetCards() {
  cardRoot.textContent = "";
}

getColdestDataFromURL();
