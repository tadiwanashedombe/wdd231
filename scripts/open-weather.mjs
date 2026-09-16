const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figCaption = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.750&lon=6.636&units=imperial&appid=3acb978abcf9b5eb3eb8c09c5af40320";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}
function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    let description = data.weather[0].description;
    weatherIcon.setAttribute('src',iconSrc);
    weatherIcon.setAttribute('alt',description);

    figCaption.textContent = `${description}`;
    
}
apiFetch();