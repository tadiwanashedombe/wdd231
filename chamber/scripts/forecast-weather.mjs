const API_KEY = "3acb978abcf9b5eb3eb8c09c5af40320";
const lat = "-18.020";
const lon = "6.633";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;

export async function getForecast() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            const daily = getDailyForecast(data, 3)

            displayForecastWeather(daily);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

export function getDailyForecast(forecastData, days = 3) {
    const grouped = {};

    forecastData.list.forEach(entry => {
        const date = entry.dt_txt.split(' ')[0];

        if (!grouped[date]) grouped[date] = [];

        grouped[date].push(entry);
    });

    const dates = Object.keys(grouped).slice(1, 1 + days);

    return dates.map(date => {
        const entries = grouped[date];
        const temps = entries.map(e => e.main.temp);
        const midday = entries.find(e => e.dt_txt.includes('12:00:00')) || entries[Math.floor(entries.length / 2)];

        return {
            date,
            minTemp: Math.min(...temps),
            maxTemp: Math.max(...temps),
            description: midday.weather[0].description,
            temp:midday.main.temp
        };
    });
}

export function displayForecastWeather(daily) {
    const forecastContainer = document.querySelector('#weather');
    
    const forecast = document.createElement('span');
    forecast.setAttribute("class","forecast");
    
    daily.forEach(day => {

        const weatherCard = document.createElement("span");
        weatherCard.setAttribute('class', 'forecast-weather-card');

        const date = document.createElement("span");
        date.setAttribute('class', 'date');
        const formattedDate = new Date(day.date).toLocaleDateString(undefined, {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
        });
        date.textContent = `${formattedDate}`;


        const tempDesc = document.createElement("span");
        tempDesc.setAttribute('class', 'forecast-description');

        const temp = document.createElement("span");
        temp.setAttribute('class', 'temp');
        temp.innerHTML = `${day.temp}&deg;F`;


        const desc = document.createElement("span");
        desc.setAttribute('class', 'desc');
        desc.textContent = day.description;

        const highLow = document.createElement("span");
        highLow.setAttribute('class', 'high-low');

        const tempHigh = document.createElement("span");
        tempHigh.setAttribute('class', 'temp-high');
        tempHigh.innerHTML = `<b>High:</b> ${Math.round(day.maxTemp)}&deg;F`;

        const tempLow = document.createElement("span");
        tempLow.setAttribute('class', 'temp-low');
        tempLow.innerHTML = `<b>Low:</b> ${Math.round(day.minTemp)}&deg;F`


        weatherCard.appendChild(date);
        weatherCard.appendChild(tempDesc)
        weatherCard.appendChild(highLow);

        tempDesc.appendChild(temp);
        tempDesc.appendChild(desc);

        highLow.appendChild(tempHigh);
        highLow.appendChild(tempLow);

        forecast.appendChild(weatherCard);
        forecastContainer.appendChild(forecast);
    });
}
