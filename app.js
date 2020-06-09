const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const secondbtn = document.getElementById("get-secondbtn");
const title = document.querySelector(".title");
const image = document.querySelector(".image");
const imageOfTheDay = document.querySelector(".daily-image");

const getImageOfTheDay = () => {
  axios
    .get("https://api.nasa.gov/planetary/apod?", {
      params: {
        api_key: "DEMO_KEY",
        date: "2019-12-05",
      },
    })
    .then((response) => {
      console.log(response);
      imageOfTheDay.insertAdjacentHTML(
        "beforeend",
        `<img src=${response.data.hdurl}>`
      );
    });
};

// getImageOfTheDay();

const getSecondData = () => {
  axios
    .get("https://images-api.nasa.gov/search?q", {
      params: {
        year_end: 2001,
      },
    })
    .then((response) => {
      console.log(response.items);
      console.log(response);
    });
};

const getData = () => {
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=JvwvVGPszLUjfaOIrKYEWN01deXWiC6vUUVDle8a"
    )
    .then((response) => {
      const img = `<img class="testi" src=${response.data.hdurl}`;
      /*  console.log(response);
        console.log(img);
        console.log(response.data.hdurl); */
      title.insertAdjacentHTML("beforeend", response.data.title);
      image.insertAdjacentHTML(
        "beforeend",
        `<img class="boy" src=${response.data.hdurl}>`
      );
    });
};
const sendData = () => {
  axios
    .post("https://reqres.in/api/register", {
      email: "eve.holt@reqres.in",
      password: "pistol",
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err, err.response);
    });
};

const test = () => {
  axios
    .all([getSecondData(), getData()])
    .then(axios.spread(function (acct, perms) {}));
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
secondbtn.addEventListener("click", getSecondData);
secondbtn.addEventListener("click", test);
secondbtn.addEventListener("click", getImageOfTheDay);
