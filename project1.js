const place = document.getElementById('location');

const loc =  document.getElementById("Place");
const temp1 =  document.getElementById("Temp");
const curWea =  document.getElementById("Current-weather");
const windSp =  document.getElementById("wind-speed");
const hu =  document.getElementById("humid");
const fl =  document.getElementById("feels-like");

const pictures = document.getElementById("pics");


function showWeatherInfo(getWeatherData)
{
    console.log(getWeatherData);
   
    if(getWeatherData.cod == 404)
    {
      document.getElementById("notFound").innerHTML = "City, state, or country not found. Please try again.";
      document.getElementById("notFound").style.display = 'block';
      pictures.style.display = 'none';
      loc.style.display = 'none';
      temp1.style.display = 'none';
      curWea.style.display = 'none';
      windSp.style.display = 'none';
      hu.style.display = 'none';
      fl.style.display = 'none';
      return;
    }


    // Gets rid of the not found error if the location is valid.
    document.getElementById("notFound").style.display = 'none';

    loc.innerHTML = "Location: " + "<br>" + getWeatherData.name + "<br>" + "<br>"+ "Country: " + "<br>" + getWeatherData.sys.country;
    loc.style.display = 'block';
    
    temp1.innerHTML = "Temperature: " + "<br>" + getWeatherData.main.temp + " °C";
    temp1.style.display = 'block';
    

    curWea.innerHTML = "Condition: " + "<br>" +  getWeatherData.weather[0].description;
    curWea.style.display = 'block';
   

    windSp.innerHTML = "Wind Speed: " + "<br>" + getWeatherData.wind.speed + " m/s";
    windSp.style.display = 'block';
    
   
    hu.innerHTML = "Humidity: " + "<br>" + getWeatherData.main.humidity + "%";
    hu.style.display = 'block';
  

    fl.innerHTML = "Feels like: " + "<br>" + getWeatherData.main.feels_like + " °C";
    fl.style.display = 'block';
   
    
    // https://media.tenor.com/gznLWsJjaMAAAAAC/daytime-miving.gif
    if(getWeatherData.weather[0].description == "clear sky")
    {
       pictures.src = "clear-sky.gif";
       pictures.alt = "Clear Sky";
       pictures.style.display = 'block';
    }
    // https://media.tenor.com/D8N2aMZtd4YAAAAC/rain.gif
    if(getWeatherData.weather[0].description == "moderate rain")
    {
      pictures.src = "rain.gif";
      pictures.alt = "Raining";
      pictures.style.display = 'block';
    }
    // https://media.tenor.com/WhD4AWN30YkAAAAC/clouds-moving.gif
    if(getWeatherData.weather[0].description == "scattered clouds")
    {
      pictures.src = "scattered-clouds.gif";
      pictures.alt = "Scattered Clouds";
      pictures.style.display = 'block';
    }

   // https://i.gifer.com/7RtV.gif
   if(getWeatherData.weather[0].description == "overcast clouds")
   {
      pictures.src = "overcast.gif";
      pictures.alt = "Overcast Clouds";
      pictures.style.display = 'block';
   }

   // https://media.tenor.com/5sMqxZU0224AAAAd/heavy-rain-rainy-day.gif
   if(getWeatherData.weather[0].description == "shower rain")
   {
      pictures.src = "heavy-rain.gif";
      pictures.alt = "Heavy Rain";
      pictures.style.display = 'block';
   }

   // https://media.tenor.com/NsxcRYfc_PYAAAAC/street-lights-rain.gif
   if(getWeatherData.weather[0].description == "light rain")
   {
      pictures.src  = "light-rain.gif";
      pictures.alt  = "Light Rain";
      pictures.style.display = 'block';
   }
   // https://media.tenor.com/szl0uLjxqVYAAAAC/snow-light.gif
   if(getWeatherData.weather[0].description == "light snow" || getWeatherData.weather[0].description == "snow")
   {
      pictures.src  = "light-snow.gif";
      pictures.alt = "Light Snow";
      pictures.style.display = 'block';
   }
   // https://media0.giphy.com/media/JjrDsvilNKgw0/giphy.gif
   if(getWeatherData.weather[0].description == "heavy intensity rain")
   {
      pictures.src = "heavy-rain1.gif";
      pictures.alt = "Heavy Rain";
      pictures.style.display = 'block';
   }
   // https://i.pinimg.com/originals/d9/a6/ee/d9a6eeb44e2edf61d515c7622264c2fc.gif
   if(getWeatherData.weather[0].description == "few clouds")
   {
      pictures.src = "few-clouds.gif";
      pictures.alt = "Few Clouds";
      pictures.style.display = 'block';
   }
   // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/625a747a-061b-477d-958f-a0d6cea9e4cb/dax9bd4-dd0da73d-5b6e-415c-b05e-19471f366e5a.jpg/v1/fill/w_1024,h_768,q_75,strp/broken_clouds_by_kevintheman_dax9bd4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNjI1YTc0N2EtMDYxYi00NzdkLTk1OGYtYTBkNmNlYTllNGNiXC9kYXg5YmQ0LWRkMGRhNzNkLTViNmUtNDE1Yy1iMDVlLTE5NDcxZjM2NmU1YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2HBtScMyydNDUe606gk2Jd8RHs6iM-76feSI7Dc3sLw
   if(getWeatherData.weather[0].description == "broken clouds")
   {
      pictures.src = "broken-clouds.jpg";
      pictures.alt  = "Broken Clouds";
      pictures.style.display = 'block';
   }
   //https://i.gifer.com/7Jy7.gif
   if(getWeatherData.weather[0].description == "smoke")
   {
      pictures.src = "hazy.gif";
      pictures.alt = "Hazy";
      pictures.style.display = 'block';
   }
   if(getWeatherData.weather[0].description == "mist")
   {
      pictures.src = "mist.gif";
      pictures.alt = "Mist";
      pictures.style.display  = 'block';
   }
   //https://i.gifer.com/7Jy7.gif
   if(getWeatherData.weather[0].description == "haze")
   {
      pictures.src = "hazy.gif";
      pictures.alt = "Hazy";
      pictures.style.display  = 'block';
   }
}

// Used https://alwazkazi3.medium.com/creating-a-weather-app-using-api-javascript-4d7bb26bbc92 for reference.
searchButton.addEventListener('click', function() 
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place.value}&units=metric&appid=1b0a6e545914ac570a8519f74347368f`)
        .then(response => response.json())
        .then(showWeatherInfo) 
});

