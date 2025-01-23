// const apiKey = "77e00a5abfd4b3f8e9591b792457d2cf";

const city = document.querySelector(".city");
const search = document.querySelector(".search img");
const weatherImg = document.querySelector(".weather img");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity p");
const windSpeed = document.querySelector(".wind-speed p");
const input = document.querySelector(".search input");

function getWeather () {
    let inputCity = document.querySelector(".search input").value;
    console.log(inputCity);
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=77e00a5abfd4b3f8e9591b792457d2cf`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            let error = document.querySelector(".errorMessage");
            let display = document.querySelector(".info");
            if (data.cod == "404") {
                error.style.display = "block";
                display.style.display = "none";
                return;
            } else {
                error.style.display = "none";
                display.style.display = "block";
                city.textContent = data.name;
                weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                temp.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
                humidity.textContent = `${data.main.humidity}%`;
                windSpeed.textContent = `${data.wind.speed} km/h`;
            }
        });
}

input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        getWeather();
    }
});

search.addEventListener("click", () => {getWeather();});
