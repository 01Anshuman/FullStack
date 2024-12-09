document.addEventListener('DOMContentLoaded',()=>{

//selecting the content and storing it into variables:
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay =document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");
    const API_KEY = "a63be07366c88425a7ae87b09965bb81";
  
//firing eventlistner while clicking getbutton
    getWeatherBtn.addEventListener('click', async()=>{
      const city = cityInput.value.trim();
      if(!city) return;

      //it may throw an error
      // server is always in another continent

      try{
       const weatherData = await fetchWeatherData(city);
       displayWeatherData(weatherData);

      } catch(error) {
        console.log("error occured")
        showError();
       }

    });

//creating async function for fetching data from api
    async function fetchWeatherData(city){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      const response= await fetch(url);
      console.log(typeof response);
      console.log("Response: ", response);

      if(!response.ok){
        throw new Error("City Not found")
      }
      const data = await response.json();
      return data;
    }
 
//creating the function for displaying the informaiton after fetching the data.
    function displayWeatherData(data){
     console.log(data);
     const {name,main,weather} = data;
     cityNameDisplay.textContent = name;

     //unlock the display
     weatherInfo.classList.remove('hidden');
     errorMessage.classList.add("hidden");
     temperatureDisplay.textContent = `Temparature: ${main.temp}`;
     descriptionDisplay.textContent = `Weather: ${weather[0].description};`

    }


//function for showing the error
    function showError(){
      weatherInfo.classList.remove('hidden');
      errorMessage.classList.remove('hidden')
    }


});