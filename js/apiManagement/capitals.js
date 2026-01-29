const url_capitals = "https://api.open-meteo.com/v1/forecast?latitude=40.4165,51.5085,41.8919,48.8534,52.5244,55.6759,38.7167,46.9481&longitude=-3.7026,-0.1257,12.5113,2.3488,13.4105,12.5655,-9.1333,7.4474&hourly=temperature_2m,precipitation_probability,relative_humidity_2m&forecast_days=1";
let capitalsInfo, capitalsInfoPrecipitation, capitalsInfoHumidity;

async function getCapitalsDataFromURL() {
  await fetch(url_capitals)
    .then(response => response.json())
    .then(data => {
      setCapitalsData(data)
    })
}

function setCapitalsData(data) {
  capitalsInfo = {
    capitalMadrid: data[0].hourly.temperature_2m[13],
    capitalLondon: data[1].hourly.temperature_2m[13],
    capitalRome: data[2].hourly.temperature_2m[13],
    capitalParis: data[3].hourly.temperature_2m[13],
    capitalBerlin: data[4].hourly.temperature_2m[13],
    capitalCopenhagen: data[5].hourly.temperature_2m[13],
    capitalLisboa: data[6].hourly.temperature_2m[13],
    capitalSuiza: data[7].hourly.temperature_2m[13]
  }
  capitalsInfoPrecipitation = {
    capitalMadrid: data[0].hourly.precipitation_probability[13],
    capitalLondon: data[1].hourly.precipitation_probability[13],
    capitalRome: data[2].hourly.precipitation_probability[13],
    capitalParis: data[3].hourly.precipitation_probability[13],
    capitalBerlin: data[4].hourly.precipitation_probability[13],
    capitalCopenhagen: data[5].hourly.precipitation_probability[13],
    capitalLisboa: data[6].hourly.precipitation_probability[13],
    capitalSuiza: data[7].hourly.precipitation_probability[13]
  }
  capitalsInfoHumidity = {
    capitalMadrid: data[0].hourly.relative_humidity_2m[13],
    capitalLondon: data[1].hourly.relative_humidity_2m[13],
    capitalRome: data[2].hourly.relative_humidity_2m[13],
    capitalParis: data[3].hourly.relative_humidity_2m[13],
    capitalBerlin: data[4].hourly.relative_humidity_2m[13],
    capitalCopenhagen: data[5].hourly.relative_humidity_2m[13],
    capitalLisboa: data[6].hourly.relative_humidity_2m[13],
    capitalSuiza: data[7].hourly.relative_humidity_2m[13]
  }
}

function createCapitalsCards() {
  resetCards();
  createCard("Temperature C°", "Madrid, Spain", capitalsInfo.capitalMadrid);
  createCard("Rain Probability %", "Madrid, Spain", capitalsInfoPrecipitation.capitalMadrid);
  createCard("Humidity %", "Madrid, Spain", capitalsInfoHumidity.capitalMadrid);
  createCard("Rain Probability %", "London, UK", capitalsInfoPrecipitation.capitalLondon);
  createCard("Humidity %", "London, UK", capitalsInfoHumidity.capitalLondon);
  createCard("Temperature C°", "Rome, Italy", capitalsInfo.capitalRome);
  createCard("Humidity %", "Rome, Italy", capitalsInfoHumidity.capitalRome);
  createCard("Temperature C°", "Paris, France", capitalsInfo.capitalParis);
  createCard("Rain Probability %", "Paris, France", capitalsInfoPrecipitation.capitalParis);
  createCard("Rain Probability %", "Copenhagen, Denmark", capitalsInfoPrecipitation.capitalCopenhagen);
  createCard("Humidity %", "Copenhagen, Denmark", capitalsInfoHumidity.capitalCopenhagen);
  createCard("Temperature C°", "Bern, Schweiz", capitalsInfo.capitalSuiza);
  createCard("Rain Probability %", "Bern, Schweiz", capitalsInfoPrecipitation.capitalSuiza);
  createCard("Temperature C°", "Lisbon, Portuguese", capitalsInfo.capitalLisboa);
  createCard("Rain Probability %", "Lisbon, Portuguese", capitalsInfoPrecipitation.capitalLisboa);
  createCard("Humidity %", "Lisbon, Portuguese", capitalsInfoHumidity.capitalLisboa);
}

function resetCards() {
  cardRoot.textContent = "";
}

getCapitalsDataFromURL();
