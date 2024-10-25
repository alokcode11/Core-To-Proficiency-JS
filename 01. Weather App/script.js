// Step 1: Define your API key and base URL for the OpenWeatherMap API.
const apiKey = "a51f24d3dce4466502b0125579bb1e3a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Step 2: Select DOM elements: search input, button, and weather icon.
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Step 3: Define an asynchronous function to fetch weather data.
async function checkWeather(city) {
  // Step 4: Make an API call to fetch the weather data for the input city.
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  // Step 5: Check if the city is found or not (error handling).
  if (data.cod === "404") {
    // If the city is not found, show an alert and stop execution.
    alert("City not found!");
    return;
  }

  // Step 6: If the city is found, update the DOM with the fetched weather details.
  // Display city name, temperature (in Celsius), humidity, and wind speed.
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  // Step 7: Update the weather icon based on the weather condition.
  // The condition is based on the 'main' property of the weather object.
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "images/snow.png";
  } else {
    weatherIcon.src = "images/default.png"; // Fallback for other conditions.
  }

  // Step 8: Make sure the weather container is displayed once data is fetched.
  document.querySelector(".weather").style.display = "block";
}

// Step 9: Add an event listener to the search button.
// When the button is clicked, check if the search box is empty or not.
searchBtn.addEventListener("click", () => {
  // Step 10: If the search box is empty, hide the weather container.
  if (searchBox.value === "") {
    document.querySelector(".weather").style.display = "none";
  } else {
    // Step 11: If the search box has a value, call the checkWeather() function with the input value.
    checkWeather(searchBox.value);
  }
});

// Define API and DOM elements:

// Set the apiKey and apiUrl.
// Select the input field, button, and weather icon elements.
// Define checkWeather() function:

// Use fetch() to make an API request to OpenWeatherMap with the city name.
// Parse the response and check for errors (like city not found).
// If the city is found, update the HTML elements with the city name, temperature, humidity, and wind speed.
// Update the weather icon based on the weather condition (like Clouds, Clear, Rain, etc.).
// Handle search button click:

// Check if the search input is empty.
// If empty, hide the weather details.
// If not empty, call the checkWeather() function with the input value (city name).
// Error handling:

// If the city is not found, show an alert.
// Make sure the weather container is only shown after a valid city is searched.
