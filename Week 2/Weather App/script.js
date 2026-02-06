const apiKey = 'd4612d48873ee61bf505bdd0be592cd1';
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const errorMsg = document.getElementById('error-message');

searchBtn.addEventListener('click', () => getWeather(cityInput.value));

async function getWeather(city) {
    if (!city) return;

    errorMsg.style.display = 'none';
    document.getElementById('current-weather').style.display = 'none';
    document.getElementById('forecast-section').style.display = 'none';

    try {
        const currentRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
        if (!currentRes.ok) 
            throw new Error('City not found');
        const currentData = await currentRes.json();
        displayCurrentWeather(currentData);

        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const forecastData = await forecastRes.json();
        displayForecast(forecastData.list);

    } catch (error) {
        errorMsg.textContent = error.message;
        errorMsg.style.display = 'block';
    }
}

function displayCurrentWeather(data) {
    document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('wind-speed').textContent = data.wind.speed;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    document.getElementById('current-weather').style.display = 'block';
}

function displayForecast(list) {
    const forecastGrid = document.getElementById('forecast-grid');
    forecastGrid.innerHTML = '';


    const dailyData = list.filter(reading => reading.dt_txt.includes("12:00:00"));

    dailyData.forEach(day => {
        const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <p><strong>${date}</strong></p>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="icon">
            <p>${Math.round(day.main.temp)}°C</p>
            <p>${day.weather[0].main}</p>
        `;
        forecastGrid.appendChild(card);
    });

    document.getElementById('forecast-section').style.display = 'block';
}