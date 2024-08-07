import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { InputFeild, SearchBar, WeatherComponent } from "./Weather";
import searchIcon from "../assets/search.png";
import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import humidityIcon from "../assets/humidity.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import windIcon from "../assets/wind.png";
import { Tempreture } from "./Weather";
import { LocationP } from "./Weather";
import { WeatherDataDiv } from "./Weather";
import { ColumnofWetherDiv } from "./Weather";

const WeatherApp = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const icons = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": cloudIcon,
    "03n": cloudIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": searchIcon,
    "13n": snowIcon,
  };
  const fetchWeatherData = async (city) => {
    if (city === "") return alert("Enter City Name");
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await res.json();
    console.log(data);
    const icon = icons[data.weather[0].icon] || clearIcon;
    const description = data.weather[0].description;
    setWeatherData({
      humidity: data.main.humidity,
      WindSpeed: data.wind.speed,
      tempreture: data.main.temp,
      location: data.name,
      icon: icon,
      description: description,
    });
  };

  useEffect(() => {
    fetchWeatherData("Pune");
  }, []);

  return (
    <WeatherComponent>
      <SearchBar>
        <InputFeild type="text" placeholder="Search" ref={inputRef} />
        <img
          src={searchIcon}
          alt="search-icon"
          style={{
            width: "50px",
            padding: "15px",
            borderRadius: "50%",
            background: "#ebfffc",
            cursor: "pointer",
          }}
          onClick={() => fetchWeatherData(inputRef.current.value)}
        />
      </SearchBar>

      <img
        src={weatherData.icon}
        alt=""
        style={{ width: "150px", margin: "30px 0px" }}
      />
      <Tempreture>{weatherData.tempreture}</Tempreture>
      <LocationP>{weatherData.location}</LocationP>
      <WeatherDataDiv>
        <ColumnofWetherDiv>
          <img src={humidityIcon} alt="humidity icon" />
          <div>
            <p>{weatherData.humidity}</p>
            <span>Humidity</span>
          </div>
        </ColumnofWetherDiv>
        <ColumnofWetherDiv>
          <img src={windIcon} alt="wind icon" />
          <div>
            <p>{weatherData.WindSpeed}</p>
            <span>Wind Speed</span>
          </div>
        </ColumnofWetherDiv>
      </WeatherDataDiv>
      <div style={{marginTop:'10px',color:'white', display:'flex',justifyContent:'center',alignContent:'center'}}>{weatherData.description}</div>
    </WeatherComponent>
  );
};

export default WeatherApp;
