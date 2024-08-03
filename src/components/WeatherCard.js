import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
      <div className="w-full max-w-screen-sm p-10 rounded-xl ring-8 ring-white ring-opacity-40" style={{marginTop:'20%',marginLeft:'10%',height:'500px',backgroundColor:'#ebe299',width:'570px'}}>
        <div className="flex m-10">
          <svg className="h-24 w-24 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>
          <div className="flex flex-col">
          <span className="text-3xl font-bold text-orange-300" style={{color:'orange'}}>Today</span>
            <span className="text-6xl font-bold text-orange-300" style={{color:'orange'}}>{weather.temperature}°</span>
            <span className="font-semibold mt-1 text-orange-300" style={{color:'orange'}}>{weather.location}</span>
          </div>
        </div>
        <div className="flex justify-between mt-12 ">
          <div className="w-full p-2">
            <div className="w-full text-center text-3xl pl-35 text-orange-300" style={{color:'orange'}}>
              <b>{weather.description}</b>
            </div>
            <div className="w-full text-center text-2xl pl-35 pt-10 text-orange-300" style={{color:'orange'}}>
              <h2>{new Date().toDateString()}</h2>
            </div>
            <div className="w-full text-center text-2xl pl-35 pt-10 text-orange-300" style={{color:'orange'}}>
              <h2>Feels like {weather.feels_like}°</h2>
            </div>
            <div className="w-full text-center text-2xl pl-35 pt-6 text-orange-300" style={{color:'orange'}}>
              <h2>Sunset {weather.sunset}</h2>
            </div>
          </div>
        </div>
      </div>
  );
};

export default WeatherCard;

