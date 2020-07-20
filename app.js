const imageOfTheDay = document.querySelector(".daily-image");
const pictureName = document.querySelector(".picture-name");
const marsWeather = document.querySelector(".mars-weather");
const marsBtn = document.querySelectorAll(".mars__btn1");
const marsWeatherToday = document.querySelector(".mars__today-data");
const marsWeatherTomorrow = document.querySelector(".mars__tomorrow-data");
const btnMarsToday = document.getElementById("btn__today");
const marsTitle = document.querySelector(".mars__title");
const btnMarsTomorrow = document.getElementById("btn__tomorrow");
const btnNextDay = document.getElementById("btn__nextDay");
const marsInfoData = document.querySelector(".mars__info-data");
const apiPicOfTheDay = axios.get("https://api.nasa.gov/planetary/apod?", {
  params: {
    api_key: "DEMO_KEY",
  },
});
const apiMarsWeather = axios.get("https://api.nasa.gov/insight_weather/", {
  params: {
    api_key: "DEMO_KEY",
    version: "1.0",
    feedtype: "json",
  },
});

// Api to get the Image of the day

const getImageOfTheDay = () => {
  apiPicOfTheDay.then((response) => {
    imageOfTheDay.insertAdjacentHTML(
      "beforeend",
      `<img src=${response.data.hdurl}>`
    );
    pictureName.insertAdjacentHTML("beforeend", `${response.data.title}`);
  });
};

getImageOfTheDay();

// Api to get Mars Weather

async function getMarsWeather() {
  axios
    .all([getTodayWeather(), getTomorrowWeather(), getTodayInfo()])
    .then(axios.spread(function (acc, perms) {}));
}

const getTodayWeather = () => {
  apiMarsWeather.then((response) => {
    const weather = Object.values(response.data);
    const weatherToday = weather[0].AT.av;
    marsWeatherToday.insertAdjacentHTML("beforeend", weatherToday);
    btnMarsToday.onclick = () => false;
  });
};

const getTomorrowWeather = () => {
  apiMarsWeather.then((response) => {
    const weather = Object.values(response.data);
    const weatherTomorrow = weather[1].AT.av;
    marsWeatherTomorrow.insertAdjacentHTML("beforeend", weatherTomorrow);
  });
};

const getTodayInfo = () => {
  apiMarsWeather.then((response) => {
    const weather = Object.values(response.data);
    const weatherInTwoDays = weather[2].AT.av;
    console.log(weatherInTwoDays);
    marsInfoData.insertAdjacentHTML("beforeend", weatherInTwoDays);
  });
};

btnMarsToday.addEventListener("click", getTodayWeather, {
  once: true,
});
btnMarsTomorrow.addEventListener("click", getTomorrowWeather, {
  once: true,
});
btnNextDay.addEventListener("click", getTodayInfo, {
  once: true,
});
marsTitle.addEventListener("mouseover", getMarsWeather, {
  once: true,
});
