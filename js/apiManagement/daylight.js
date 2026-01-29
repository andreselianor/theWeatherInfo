const url_daylight = "https://api.open-meteo.com/v1/forecast?latitude=38.3452&longitude=-0.4815&daily=daylight_duration";
let daylight;

async function getLightdayDataFromURL() {
  await fetch(url_daylight)
    .then(response => response.json())
    .then(data => {
      setDaylightData(data)
    })
}

function setDaylightData(data) {
  daylight = {
    daylight1: data.daily.daylight_duration[0],
    daylight2: data.daily.daylight_duration[1],
    daylight3: data.daily.daylight_duration[2],
    daylight4: data.daily.daylight_duration[3],
    daylight5: data.daily.daylight_duration[4],
    daylight6: data.daily.daylight_duration[5],
    daylight7: data.daily.daylight_duration[6]
  }
}

function createDaylight() {
  const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

  let today = new Date();
  let todayName = days[today.getDay()];
  let today2Name = days[(today.getDay() + 1) % 7];
  let today3Name = days[(today.getDay() + 2) % 7];
  let today4Name = days[(today.getDay() + 3) % 7];
  let today5Name = days[(today.getDay() + 4) % 7];
  let today6Name = days[(today.getDay() + 5) % 7];
  let today7Name = days[(today.getDay() + 6) % 7];
  resetCards();
  createCard("Daylight in hours", `Average Hours at Alicante`, Math.floor((daylight.daylight1) / 3600));
  createCard("Daylight in seconds", `Alicante at ${todayName}`, daylight.daylight1);
  createCard("Daylight in seconds", `Alicante at ${today2Name}`, daylight.daylight2);
  createCard("Daylight in seconds", `Alicante at ${today3Name}`, daylight.daylight3);
  createCard("Daylight in seconds", `Alicante at ${today4Name}`, daylight.daylight4);
  createCard("Daylight in seconds", `Alicante at ${today5Name}`, daylight.daylight5);
  createCard("Daylight in seconds", `Alicante at ${today6Name}`, daylight.daylight6);
  createCard("Daylight in seconds", `Alicante at ${today7Name}`, daylight.daylight7);
}

function resetCards() {
  cardRoot.textContent = "";
}

getLightdayDataFromURL();
