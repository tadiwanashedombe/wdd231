const API_KEY = "3acb978abcf9b5eb3eb8c09c5af40320";
const lat = "-18.020";
const lon = "6.633";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;

export async function getCurrentWeather() {
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);

            displayCurrentWaether(data);
        }else{
            throw Error(await response.text());
        }
    }
    catch(error){
        console.log(error);
    }
}

export function displayCurrentWaether(data){
    
    const temp = `${data.main.temp}&deg;F`;
    
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    let description = data.weather[0].description;
    const icon = document.querySelector(".icon");
    icon.innerHTML = `<img src="${iconSrc}" alt="${description}" height="200" width="200"> `;

    const tempDescription = document.querySelector(".current-description");
    tempDescription.innerHTML =  `${temp} - ${description}`;

    const high = document.querySelector("#temp-high");
    high.innerHTML = `<b>High:</b> ${data.main.temp_max}&deg;F`;

    const low = document.querySelector("#temp-low");
    low.innerHTML = `<b>Low:</b> ${data.main.temp_min}&deg;F`;
}
