const forecastInfoSection = document.querySelector(".forecast"); // The section where weather will be displayed

// OpenWeatherMap One Call API URL (using coordinates for Mexico)
//const forecastAPIURL = "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=19.52&lon=-99.21&units=metric&appid=773ae0868087c5bad9f17ba6ef19ddde";
const forecastAPIURL = "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=19.52&lon=99.21&units=metric&appid=773ae0868087c5bad9f17ba6ef19ddde";
const weatherAPIURL =  "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=773ae0868087c5bad9f17ba6ef19ddde";
// Fetch and update the weather information
async function getWeather() {
    try {
        const response = await fetch(forecastAPIURL);
        const data = await response.json();
        console.table(data);

        // Extract current weather data
        const temperature = data.current.temp;
        const description = data.current.weather[0].description;
        const icon = data.current.weather[0].icon;

        // Extract forecast data for next 3 days
        const forecast = data.daily.slice(1, 4); // Slice the array to get the next 3 days

        // Select the elements in the Information section to update
        const tempElement = weatherInfoSection.querySelector("p");  // Current temperature element
        const descElement = weatherInfoSection.querySelector("p:nth-of-type(2)"); // Description element
        const iconElement = weatherInfoSection.querySelector("img"); // Weather icon element
        const forecastElement = weatherInfoSection.querySelector(".forecast"); // 3-day forecast element

        // Update the current weather information
        tempElement.innerHTML = `Current Temperature: ${temperature}&deg;C`;
        descElement.innerHTML = `Condition: ${description.charAt(0).toUpperCase() + description.slice(1)}`;
        iconElement.src = `https://openweathermap.org/img/wn/${icon}.png`;
        iconElement.alt = description;

        // Update the forecast for the next 3 days
        forecastElement.innerHTML = ''; // Clear any existing forecast data
        forecast.forEach((day, index) => {
            const dayTemp = day.temp.day;  // Day temperature
            const dayIcon = day.weather[0].icon;  // Icon for the day
            const dayDescription = day.weather[0].description;  // Description for the day

            // Create forecast card for each day
            forecastElement.innerHTML += `
        <div class="forecast-day">
          <p>Day ${index + 1} - ${dayTemp}&deg;C</p>
          <p>${dayDescription.charAt(0).toUpperCase() + dayDescription.slice(1)}</p>
          <img src="https://openweathermap.org/img/wn/${dayIcon}.png" alt="${dayDescription}">
        </div>
      `;
        });
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}

// Call the function to display the weather and forecast when the page loads
getWeather();