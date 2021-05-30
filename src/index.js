function changeCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#current-city");
  let h1 = document.querySelector("h1");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.value}&units=metric&appid=${apiKey}`;
  h1.innerHTML = `${currentCity.value}`;
  axios.get(apiUrl).then(showWeather);
}

// function changeUnit(event) {
//   event.preventDefault();
//   let currentUnit = document.querySelector("#change-unit-button");
//   // let currentTemp = document.querySelector("h2");

//   // if (currentUnit.innerHTML.trim() === "Switch to Fahrenheit") {
//   //   currentTemp.innerHTML = "66°F <br /> 🌞";
//   //   currentUnit.innerHTML = "Switch to Celsius";
//   // } else {
//   //   currentTemp.innerHTML = "16°C <br /> 🌞";
//   //   currentUnit.innerHTML = "Switch to Fahrenheit";
//   // }
// }

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

currentUnit.addEventListener("click", getPosition);

let h1 = document.querySelector("h1");
let nowCity = h1.innerHTML;

let apiKey = "a4c03ac54ba18ede99da466b351a50b0";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${nowCity}&units=metric&appid=${apiKey}`;

function showWeather(response) {
  let weatherDescription = document.querySelector("h4");
  let currentTemp = document.querySelector("h2");
  let temperature = Math.round(response.data.main.temp);
  let feelsLike = Math.round(response.data.main.feels_like);
  let description = response.data.weather.description;

  let wind = Math.round(response.data.wind.speed * 3.6);

  currentTemp.innerHTML = `${temperature}°C`;
  weatherDescription.innerHTML = `Feels like ${feelsLike}°C <br /><br /${description}<br /><br />${wind}km winds`;
}

axios.get(apiUrl).then(showWeather);

function getLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "a4c03ac54ba18ede99da466b351a50b0";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
function getPosition() {
  navigator.geolocation.getCurrentPosition(getLocation);
}
