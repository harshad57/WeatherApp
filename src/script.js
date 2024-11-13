const inputBox = document.querySelector('.input');
const search = document.querySelector('.search');
const celcius = document.querySelector('.celcius');
const description = document.querySelector('.description');
const humidity = document.querySelector('.hum-per');
const wind = document.querySelector('.wind_km');

async function checkweather(city) {
    const api_key = 'a1a74f6c5b5661307a3a2993b3c21a28';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();

if (data.cod ==='404' ){
 document.querySelector(".error").style.display = "block";
 document.querySelector(".weather") .style.display = "none";   
   }
   else { document.querySelector(".error").style.display = "none";
 document.querySelector(".weather") .style.display = "block";   
   }

      celcius.innerHTML = Math.round(data.main.temp - 273.15) + `<sup style="font-weight:normal;">°c</sup>` ;
        
        description.innerHTML = 
    data.weather[0].description ;
    
    humidity.innerHTML = 
    data.main.humidity + "%";
    
    wind.innerHTML = 
    data.wind.speed +" "+"km/h";
                        
const image = document.querySelector('.image');
        
  switch(data.weather[0].main){
      case 'Clear':
 image.src = "src/images/sun.jpg";
      break;
      
      case 'Clouds':
 image.src = "src/images/clouds.jpg";
      break;
      
     case 'Rain':
    image.src = "src/images/rain.jpg";
      break;
      
      case 'Thunderstorm':
  image.src = "src/images/thunderstorm.jpg";
      break;
      
      case 'Snow':
  image.src = "src/images/snow.jpg";
      break;
      
      default:
  image.src = "src/images/clouds.jpg";
      break;
      }
}

search.addEventListener('click', () => {
    checkweather(inputBox.value);
});