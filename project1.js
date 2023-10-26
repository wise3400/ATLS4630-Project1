const searchButton = document.getElementById('searchButton');
const place = document.getElementById('location');
const weatherInfo = document.getElementById('getWeatherInformation');
const notFound = document.getElementById('notFound');


// Used https://alwazkazi3.medium.com/creating-a-weather-app-using-api-javascript-4d7bb26bbc92 for reference.
searchButton.addEventListener('click', function() 
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place.value}&units=metric&appid=1b0a6e545914ac570a8519f74347368f`)
        .then(response => response.json())
        .then(showWeatherInfo) 

        // Used https://rapidapi.com/guides/error-handling-fetch for reference. 
        // https://lucymarmitchell.medium.com/using-then-catch-finally-to-handle-errors-in-javascript-promises-6de92bce3afc  
        
        // See if there's an error. If there is, do the things below:
        .catch(error => 
            {
                  
                  document.getElementById("notFound").innerHTML = "City, state, or country not found. Please try again.";
                  document.getElementById("notFound").style.display = 'block';
                  
            })
});

function showWeatherInfo(getWeatherData)
{
    console.log(getWeatherData);

    // Get rid of the not found error if the location is valid.
    document.getElementById("notFound").style.display = 'none';

    document.getElementById("Place").innerHTML = "Location: " + "<br>" + getWeatherData.name + ", " + getWeatherData.sys.country;
    document.getElementById("Place").style.display = 'block';
    
    document.getElementById("Temp").innerHTML = "Temperature: " + "<br>" + getWeatherData.main.temp + " °C";
    document.getElementById("Temp").style.display = 'block';
    

    document.getElementById("Current-weather").innerHTML = "Condition: " + "<br>" +  getWeatherData.weather[0].description;
    document.getElementById("Current-weather").style.display = 'block';
   

    document.getElementById("wind-speed").innerHTML = "Wind Speed: " + "<br>" + getWeatherData.wind.speed + " m/s";
    document.getElementById("wind-speed").style.display = 'block';
    
   
    document.getElementById("humid").innerHTML = "Humidity: " + "<br>" + getWeatherData.main.humidity + "%";
    document.getElementById("humid").style.display = 'block';
  

    document.getElementById("feels-like").innerHTML = "Feels like: " + "<br>" + getWeatherData.main.feels_like + " °C";
    document.getElementById("feels-like").style.display = 'block';
   
    
    //const showImg = document.getElementById("pics").style.display = 'block';
    // https://media.tenor.com/gznLWsJjaMAAAAAC/daytime-miving.gif
    if(getWeatherData.weather[0].description == "clear sky")
    {
       document.getElementById("pics").src = "clear-sky.gif";
       document.getElementById("pics").alt = "Clear Sky";
       document.getElementById("pics").style.display = 'block';
    }
    // https://media.tenor.com/D8N2aMZtd4YAAAAC/rain.gif
    if(getWeatherData.weather[0].description == "moderate rain")
    {
       document.getElementById("pics").src = "rain.gif";
       document.getElementById("pics").alt = "Raining";
       document.getElementById("pics").style.display = 'block';
    }
    // https://media.tenor.com/WhD4AWN30YkAAAAC/clouds-moving.gif
    if(getWeatherData.weather[0].description == "scattered clouds")
    {
       document.getElementById("pics").src = "scattered-clouds.gif";
       document.getElementById("pics").alt = "Scattered Clouds";
       document.getElementById("pics").style.display = 'block';
    }

   // https://i.gifer.com/7RtV.gif
   if(getWeatherData.weather[0].description == "overcast clouds")
   {
        document.getElementById("pics").src = "overcast.gif";
        document.getElementById("pics").alt = "Overcast Clouds";
        document.getElementById("pics").style.display = 'block';
   }

   // https://media.tenor.com/5sMqxZU0224AAAAd/heavy-rain-rainy-day.gif
   if(getWeatherData.weather[0].description == "shower rain")
   {
         document.getElementById("pics").src = "heavy-rain.gif";
         document.getElementById("pics").alt = "Heavy Rain";
         document.getElementById("pics").style.display = 'block';
   }

   // https://media.tenor.com/NsxcRYfc_PYAAAAC/street-lights-rain.gif
   if(getWeatherData.weather[0].description == "light rain")
   {
         document.getElementById("pics").src = "light-rain.gif";
         document.getElementById("pics").alt = "Light Rain";
         document.getElementById("pics").style.display = 'block';
   }
   // https://media.tenor.com/szl0uLjxqVYAAAAC/snow-light.gif
   if(getWeatherData.weather[0].description == "light snow")
   {
         document.getElementById("pics").src = "light-snow.gif";
         document.getElementById("pics").alt = "Light Snow";
         document.getElementById("pics").style.display = 'block';
   }
   // https://media0.giphy.com/media/JjrDsvilNKgw0/giphy.gif
   if(getWeatherData.weather[0].description == "heavy intensity rain")
   {
         document.getElementById("pics").src = "heavy-rain1.gif";
         document.getElementById("pics").alt = "Heavy Rain";
         document.getElementById("pics").style.display = 'block';
   }
   // https://i.pinimg.com/originals/d9/a6/ee/d9a6eeb44e2edf61d515c7622264c2fc.gif
   if(getWeatherData.weather[0].description == "few clouds")
   {
          document.getElementById("pics").src = "few-clouds.gif";
          document.getElementById("pics").alt = "Few Clouds";
          document.getElementById("pics").style.display = 'block';
   }
   // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/625a747a-061b-477d-958f-a0d6cea9e4cb/dax9bd4-dd0da73d-5b6e-415c-b05e-19471f366e5a.jpg/v1/fill/w_1024,h_768,q_75,strp/broken_clouds_by_kevintheman_dax9bd4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNjI1YTc0N2EtMDYxYi00NzdkLTk1OGYtYTBkNmNlYTllNGNiXC9kYXg5YmQ0LWRkMGRhNzNkLTViNmUtNDE1Yy1iMDVlLTE5NDcxZjM2NmU1YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2HBtScMyydNDUe606gk2Jd8RHs6iM-76feSI7Dc3sLw
   if(getWeatherData.weather[0].description == "broken clouds")
   {
         document.getElementById("pics").src = "broken-clouds.jpg";
         document.getElementById("pics").alt = "Broken Clouds";
         document.getElementById("pics").style.display = 'block';
   }
   //https://i.gifer.com/7Jy7.gif
   if(getWeatherData.weather[0].description == "smoke")
   {
         document.getElementById("pics").src = "hazy.gif";
         document.getElementById("pics").alt = "Hazy";
         document.getElementById("pics").style.display = 'block';
   }
   if(getWeatherData.weather[0].description == "mist")
   {
         document.getElementById("pics").src = "mist.gif";
         document.getElementById("pics").alt = "Mist";
         document.getElementById("pics").style.display = 'block';
   }
   //https://i.gifer.com/7Jy7.gif
   if(getWeatherData.weather[0].description == "haze")
   {
         document.getElementById("pics").src = "hazy.gif";
         document.getElementById("pics").alt = "Hazy";
         document.getElementById("pics").style.display = 'block';
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