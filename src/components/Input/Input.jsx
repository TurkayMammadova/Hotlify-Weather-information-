import React, { useState,useEffect } from 'react';
import './Input.css';
import Search from './icon _search.png';
import axios from 'axios';


function input({cityes,setCityes}) {
  const [city,setCity] = useState("");
  
    //  const initialCities = JSON.parse(localStorage.getItem("cities")) || [];
    // const [cities, setCities] = useState(initialCities);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) return;
    
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d348a62ee12b2bb05648ea0a4a52078`;
      const response = await axios.get(apiUrl);
      const humidity = response.data.main.humidity
      const  name = response.data.name
      const wind = response.data.wind.speed
      const temperatureInKelvin = response.data.main.temp
      const temperatureInCelsius = Math.round(temperatureInKelvin - 273.15);
      const temperatureInFahrenheit = Math.round((temperatureInKelvin - 273) * (9/5) + 32);
      const cloudsList = 
        {
          'Clouds': './src/components/Info/Cloud.png',
          'Clear':'./src/components/Info/Sun.png',
          'Drizzle':'./src/components/Info/Union_rain.png',
          'Rain':'./src/components/Info/Storm.png',
          'Fog':'./src/components/Info/Union_rain.png',
        };
      const cloud = response.data.weather[0].main
      const cloudImg = cloudsList[cloud]
      console.log("Imggggg",cloudImg)

      console.log("Buludlar",cloud)
      
console.log("Temperature in Celsius:", temperatureInCelsius);
console.log("Temperature in Fahrenheit:", temperatureInFahrenheit);

      console.log("Dataaaaaaa",response.data);
      // console.log("Humidity",response.data.main.humidity)
      // console.log("Name",response.data.name);
      // console.log("wind",response.data.wind.speed);
      const newCity = {
        wind: wind,
        name: name,
        isactive:false,
        humidity: humidity,
        cloudImg:cloudImg,
        temperatureInCelsius:temperatureInCelsius,
        temperatureInFahrenheit:temperatureInFahrenheit
      };

      setCity("");
      const updatedCities = [newCity, ...cityes];


      if (updatedCities.length > 5) {
        updatedCities.splice(5);
      }

      localStorage.setItem("items", JSON.stringify(updatedCities));
      setCityes(updatedCities);
      if (response.status!==200) {
        throw new Error('Failed to fetch weather data');

      }
    } catch (error) {
      console.log(error);
    }}

  useEffect(() => {
    handleSubmit();
  }, []);
  
  return (
    <>
    <div>
      <form className='input' onSubmit={handleSubmit} >
      <input type="text" value = {city} onChange={(e)=>setCity(e.target.value)} />
      <button type='submit'><img className='search_input' src={Search} alt=''/></button>
      </form>
    </div>
    </>
  
  )
}


export default input