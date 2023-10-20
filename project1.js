const searchButton = document.getElementById('searchButton');
const place = document.getElementById('location');
const weatherInfo = document.getElementById('getWeatherInformation');


// Used https://alwazkazi3.medium.com/creating-a-weather-app-using-api-javascript-4d7bb26bbc92 for reference.
searchButton.addEventListener('click', function() 
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place.value}&units=metric&appid=1b0a6e545914ac570a8519f74347368f`)
        .then(response => response.json())
        .then(showWeatherInfo)
        
        
});

function showWeatherInfo(getWeatherData)
{
    console.log(getWeatherData);
    document.getElementById("Current-weather").innerHTML = "Current Weather: " + getWeatherData.weather[0].description;
    document.getElementById("Place").innerHTML = "Your Location: " + getWeatherData.name + ", " + getWeatherData.sys.country;
    document.getElementById("Temp").innerHTML = "Temperature: " + getWeatherData.main.temp + "°C";
    document.getElementById("feels-like").innerHTML = "Feels like: " + getWeatherData.main.feels_like + "°C";
    document.getElementById("humid").innerHTML = "Humidity: " + getWeatherData.main.humidity + "%";
    document.getElementById("wind-speed").innerHTML = "Wind: " + getWeatherData.wind.speed + " m/s";


    if(getWeatherData.weather[0].description == "clear sky")
    {
       document.getElementById("pics").src = "clear.jpg";
       document.getElementById("pics").alt = "Clear pic";
    
    }

}



// function writeDogFactsToPage(json) {
//   for (const dogFact of json.data) {
//     const p = document.createElement('p');
//     console.log(dogFact);
//     p.innerText = dogFact.attributes.name + ", " +  dogFact.attributes.description;
   
//     document.body.appendChild(p);
//   }
// }

// fetch('https://dogapi.dog/api/v2/breeds')
//   .then(response => response.json())
//   .then(writeDogFactsToPage);

// // pexels API
// const myQuery = 'Dogs';
// fetch(`https://api.pexels.com/v1/search?query=${myQuery}&per_page=13`, {
//   type: 'GET',
//   headers: { Authorization: 'rUAeaXs8i1jb1agcojt7e1611gLOmko7P5rOtsdjLttQAXRI5WlJ4lZm' }
// }).then(response => response.json())
//   .then(json => {
//     for (const photo of json.photos) {
//       const img = document.createElement('img');
//       img.src = photo.src.small;
//       img.alt = photo.alt;
//       document.body.appendChild(img);
//     }
//   });

// const box = document.querySelector('.box');