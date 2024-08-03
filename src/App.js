import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import WeatherFooter from './components/WeatherFooter';

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=da84a3adaa432d3c89c22ec41bee0e67&units=metric`);
        const data = response?.data;
        setWeather({
          temperature: data?.main?.temp,
          description:data?.weather[0]?.description,
          icon: data?.weather[0]?.icon,
          location: `${data?.name}, ${data?.sys?.country}`,
          feels_like: data?.main?.feels_like,
          sunset: data?.sys?.sunset,
        });
        
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      <div className="flex flex-wrap p-4">
        <div className="w-full md:w-1/2 p-2">
          <WeatherCard weather={weather} />
        </div>
          <div className="w-full md:w-1/2 p-2">
          <div className="w-full">
            <WeatherDetails/>
          </div>
          <div className="w-full mt-10">
            <WeatherFooter/>
          </div>
        </div>
      </div>
    </> 
  );
}

export default App;
