const fetchURL = "https://api.openweathermap.org/data/2.5/weather?q=puerto madryn&units=metric&lang=es&appid=4ca2b13ddf8ad5300e2001fb03446dae";


let temp = document.getElementById("weather");
const timeoutDelay = 60000


const fetchData = async () => {
    try {
        let response = await fetch(fetchURL);
        let weatherData = await response.json();
        temp.innerHTML =
            `<h4 class="weather__city">${weatherData.name}</h4>
            <p class="weather__temp"><i class="fa-solid fa-temperature-high weather__icon"></i>${Math.round(weatherData.main.temp)}°C</p>`
    } catch (error) {
        console.log(error);
    } finally {
        // after doing all the other code, run the variable with the function again after timeoutDelay seconds after
        setTimeout(fetchData, timeoutDelay)
    }
}
fetchData();