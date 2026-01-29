const url_swimmers = "https://api.open-meteo.com/v1/forecast?latitude=36.7202,36.8381,37.987,38.3452,39.4739,39.9857,41.1191,41.3888,41.9831&longitude=-4.4203,-2.4597,-1.13,-0.4815,-0.3797,-0.0493,1.2454,2.159,2.8249&daily=uv_index_max,sunset,daylight_duration,temperature_2m_max&forecast_days=1";
let swimmers;

async function getSwimmersDataFromURL() {
  await fetch(url_swimmers)
    .then(response => response.json())
    .then(data => {
      setSwimmersData(data)
    })
}

function setSwimmersData(data) {
  swimmers = {
    uvMalaga: data[0].daily.uv_index_max[0],
    sunsetMalaga: data[0].daily.sunset[0].slice(-4),
    daylightMalaga: data[0].daily.daylight_duration[0],
    temperatureMalaga: data[0].daily.temperature_2m_max[0],

    uvAlmeria: data[1].daily.uv_index_max[0],
    sunsetAlmeria: data[1].daily.sunset[0].slice(-4),
    daylightAlmeria: data[1].daily.daylight_duration[0],
    temperatureAlmeria: data[1].daily.temperature_2m_max[0],

    uvMurcia: data[2].daily.uv_index_max[0],
    sunsetMurcia: data[2].daily.sunset[0].slice(-4),
    daylightMurcia: data[2].daily.daylight_duration[0],
    temperatureMurcia: data[2].daily.temperature_2m_max[0],

    uvAlicante: data[3].daily.uv_index_max[0],
    sunsetAlicante: data[3].daily.sunset[0].slice(-4),
    daylightAlicante: data[3].daily.daylight_duration[0],
    temperatureAlicante: data[3].daily.temperature_2m_max[0],

    uvValencia: data[4].daily.uv_index_max[0],
    sunsetValencia: data[4].daily.sunset[0].slice(-4),
    daylightValencia: data[4].daily.daylight_duration[0],
    temperatureValencia: data[4].daily.temperature_2m_max[0],

    uvCastellon: data[5].daily.uv_index_max[0],
    sunsetCastellon: data[5].daily.sunset[0].slice(-4),
    daylightCastellon: data[5].daily.daylight_duration[0],
    temperatureCastellon: data[5].daily.temperature_2m_max[0],

    uvTarragona: data[6].daily.uv_index_max[0],
    sunsetTarragona: data[6].daily.sunset[0].slice(-4),
    daylightTarragona: data[6].daily.daylight_duration[0],
    temperatureTarragona: data[6].daily.temperature_2m_max[0],

    uvBarcelona: data[7].daily.uv_index_max[0],
    sunsetBarcelona: data[7].daily.sunset[0].slice(-4),
    daylightBarcelona: data[7].daily.daylight_duration[0],
    temperatureBarcelona: data[7].daily.temperature_2m_max[0],

    uvGirona: data[8].daily.uv_index_max[0],
    sunsetGirona: data[8].daily.sunset[0].slice(-4),
    daylightGirona: data[8].daily.daylight_duration[0],
    temperatureGirona: data[8].daily.temperature_2m_max[0]
  }
}


function createSwimmers() {
  resetCards();
  createCard("UV value", "Malaga UV value", swimmers.uvMalaga);
  createCard("Sunset Hour", "Malaga Sunset", swimmers.sunsetMalaga, ["sunset5"]);
  createCard("Temperature max C°", "Malaga Temperature", swimmers.temperatureMalaga);
  createCard("UV value", "Almeria UV value", swimmers.uvAlmeria);
  createCard("Temperature max C°", "Malaga Temperature", swimmers.temperatureAlmeria);
  createCard("UV value", "Murcia UV value", swimmers.uvMurcia);
  createCard("Sunset Hour", "Murcia Sunset", swimmers.sunsetMurcia, ["sunset5"]);
  createCard("Temperature max C°", "Murcia Temperature", swimmers.temperatureMurcia);
  createCard("Temperature max C°", "Alicante Temperature", swimmers.temperatureAlicante);
  createCard("UV value", "Valencia UV value", swimmers.uvValencia);
  createCard("Sunset Hour", "Valencia Sunset", swimmers.sunsetValencia, ["sunset5"]);
  createCard("Temperature max C°", "Valencia Temperature", swimmers.temperatureValencia);
  createCard("Temperature max C°", "Castellon Temperature", swimmers.temperatureCastellon);
  createCard("UV value", "Tarragona UV value", swimmers.uvTarragona);
  createCard("UV value", "Barcelona UV value", swimmers.uvBarcelona);
  createCard("Sunset Hour", "Barcelona Sunset", swimmers.sunsetBarcelona, ["sunset5"]);
  createCard("Temperature max C°", "Barcelona Temperature", swimmers.temperatureBarcelona);
  createCard("Sunset Hour", "Girona Sunset", swimmers.sunsetGirona, ["sunset5"]);
  createCard("Temperature max C°", "Girona Temperature", swimmers.temperatureGirona);
}

function resetCards() {
  cardRoot.textContent = "";
}

getSwimmersDataFromURL();
