// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// URL using the 'weather' endpoint
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=773ae0868087c5bad9f17ba6ef19ddde';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing purposes

            // Displaying the results
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function capitalizeWords(description) {
    return description
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function displayResults(data) {
    // Format temperature to 0 decimal points
    currentTemp.textContent = `${Math.round(data.main.temp)}°F`;

    // Get all weather events
    const weatherEvents = data.weather.map(event => capitalizeWords(event.description)).join(', ');
    captionDesc.textContent = weatherEvents;

    // Assuming the first weather event's icon represents the primary event
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', weatherEvents);
}

apiFetch();