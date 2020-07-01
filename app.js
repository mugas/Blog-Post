/* const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const secondbtn = document.getElementById("get-secondbtn");
const title = document.querySelector(".title");
const image = document.querySelector(".image"); */
const imageOfTheDay = document.querySelector(".daily-image");
const pictureName = document.querySelector(".picture-name");
const marsWeather = document.querySelector(".mars-weather");
const marsBtn = document.querySelectorAll(".mars__btn1");
const marsWeatherToday = document.querySelector(".mars__today-data");
const marsWeatherTomorrow = document.querySelector(".mars__tomorrow-data");
const btn = document.querySelectorAll(".mars__btn");
const genera = axios.get("https://api.nasa.gov/planetary/apod?", {
  params: {
    api_key: "DEMO_KEY",
  },
});

function test() {
  btn.forEach(function (eachButton) {
    eachButton.addEventListener("click", function (e) {
      console.log(e);
    });
  });
}

// Api to get the Image of the day

const getImageOfTheDay = () => {
  /* axios
    .get("https://api.nasa.gov/planetary/apod?", {
      params: {
        api_key: "DEMO_KEY",
      },
    }) */ genera.then(
    (response) => {
      imageOfTheDay.insertAdjacentHTML(
        "beforeend",
        `<img src=${response.data.hdurl}>`
      );
      pictureName.insertAdjacentHTML("beforeend", `${response.data.title}`);
    }
  );
};

getImageOfTheDay();

// Api to get Mars Weather

const getMarsWeather = () => {
  axios
    .get("https://api.nasa.gov/insight_weather/", {
      params: {
        api_key: "DEMO_KEY",
        version: "1.0",
        feedtype: "json",
      },
    })
    .then((response) => {
      const weather = Object.values(response.data);
      const weatherToday = weather[0].AT.av;
      const weatherTomorrow = weather[1].AT.av;
      marsWeatherToday.insertAdjacentHTML("beforeend", weatherToday);
      marsWeatherTomorrow.insertAdjacentHTML("beforeend", weatherTomorrow);
    });
};

getMarsWeather();

/* const getSecondData = () => {
  axios.get("https://images-api.nasa.gov/search?q", {}).then((response) => {
    console.log(response.items);
    console.log(response);
  });
};

const getData = () => {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => {
      const img = `<img class="testi" src=${response.data.hdurl}`;
      console.log(response);
      console.log(img);
      console.log(response.data.hdurl);
      title.insertAdjacentHTML("beforeend", response.data.title);
      image.insertAdjacentHTML(
        "beforeend",
        `<img class="boy" src=${response.data.hdurl}>`
      );
    });
};

const test = () => {
  axios
    .all([getSecondData(), getData()])
    .then(axios.spread(function (acct, perms) {}));
}; */

/* getBtn.addEventListener("click", getData);
secondbtn.addEventListener("click", getSecondData);
secondbtn.addEventListener("click", test); */
// secondbtn.addEventListener("click", getImageOfTheDay);
