const weatherContainer = document.getElementById("weatherContainer");

const lastUpdatedContainer = document.getElementById("lastUpdatedContainer");

const locationContainer = document.getElementById("locationContainer");

const temperatureContainer = document.getElementById("temperatureContainer");

const locationSearch = document.getElementById("locationSearch");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", async function () {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=8dcca1e635bb40a9be1140244231812&q=London&aqi=no`,
    {
      mode: "cors",
    }
  );
  response
    .json()
    .then(function (response) {
      lastUpdatedContainer.innerHTML = response.current.last_updated;
      locationContainer.innerText = `${response.location.name}, ${response.location.region}, ${response.location.country}, lat/lon: ${response.location.lat}, ${response.location.lon}`;
      temperatureContainer.innerHTML = `${response.current.temp_c}°C / ${response.current.temp_f}°F`;
      weatherContainer.style.visibility = "visible";
    })
    .catch(function (reject) {
      weatherContainer.innerHTML = reject;
    });
});
