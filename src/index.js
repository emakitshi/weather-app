function changeCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#current-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${currentCity.value}`;
}

function changeUnit(event) {
  event.preventDefault();
  let currentUnit = document.querySelector("#change-unit-button");
  let currentTemp = document.querySelector("h2");

  console.log(currentUnit.innerHTML.trim());
  console.log("hello");

  if (currentUnit.innerHTML.trim() === "Switch to Fahrenheit") {
    currentTemp.innerHTML = "66°F <br /> 🌞";
    currentUnit.innerHTML = "Switch to Celsius";
  } else {
    currentTemp.innerHTML = "16°C <br /> 🌞";
    currentUnit.innerHTML = "Switch to Fahrenheit";
  }
}

let now = new Date();
let day = now.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let todayDays = days[day];

let hour = now.getHours();
let minutes = now.getMinutes();

let nowWeather = document.querySelector("#now-weather");

nowWeather.innerHTML = `${todayDays}, ${hour}:${minutes}`;

let currentCity = document.querySelector("#city-search");

currentCity.addEventListener("submit", changeCity);

let currentCityChange = document.querySelector("#city-search-button");

currentCityChange.addEventListener("click", changeCity);

let currentUnit = document.querySelector("#change-unit-button");

currentUnit.addEventListener("click", changeUnit);
