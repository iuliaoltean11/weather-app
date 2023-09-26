import "./App.css";
import Navbar from "./components/navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const response = "thunder";
  const [city, setCity] = useState("Sibiu");
  const [weather, setWeather] = useState(null);
  const [moonDetails, setMoonDetails] = useState(null);
  const API_KEY = "06b10288c1d9a58d6cf466b252b2703f";
  const [forecastData, setForecastData] = useState([]);
  const [nextDayForecast, setNextDayForecast] = useState(null);
  const [nextDayForecast2, setNextDayForecast2] = useState(null);
  const [nextDayForecast3, setNextDayForecast3] = useState(null);
  const [nextDayForecast4, setNextDayForecast4] = useState(null);
  const [nextDayForecast5, setNextDayForecast5] = useState(null);
  const [nextDayForecast6, setNextDayForecast6] = useState(null);
  const [nextDayForecast7, setNextDayForecast7] = useState(null);

  const fetchNextDayForecast = async (targetCity) => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: targetCity,
        days: "1",
        dt: "2023-09-27", // This can be made dynamic based on your needs
      },
      headers: {
        "X-RapidAPI-Key": "930fa074ecmshc8073cd18305a48p147ed6jsn943c497ba270",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setNextDayForecast(response.data);
    } catch (error) {
      console.error("Error fetching next day forecast:", error);
    }
  };

  const fetchNextDayForecast2 = async (targetCity) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 2);

    // Format the date to the required format
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: targetCity,
        days: "1",
        dt: formattedDate, // This can be made dynamic based on your needs
      },
      headers: {
        "X-RapidAPI-Key": "930fa074ecmshc8073cd18305a48p147ed6jsn943c497ba270",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setNextDayForecast2(response.data);
    } catch (error) {
      console.error("Error fetching next day forecast:", error);
    }
  };

  const fetchNextDayForecast3 = async (targetCity) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 3);

    // Format the date to the required format
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: targetCity,
        days: "1",
        dt: formattedDate, // This can be made dynamic based on your needs
      },
      headers: {
        "X-RapidAPI-Key": "930fa074ecmshc8073cd18305a48p147ed6jsn943c497ba270",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setNextDayForecast3(response.data);
    } catch (error) {
      console.error("Error fetching next day forecast:", error);
    }
  };

  const fetchNextDayForecast4 = async (targetCity) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 4);

    // Format the date to the required format
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: targetCity,
        days: "1",
        dt: formattedDate, // This can be made dynamic based on your needs
      },
      headers: {
        "X-RapidAPI-Key": "930fa074ecmshc8073cd18305a48p147ed6jsn943c497ba270",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setNextDayForecast4(response.data);
    } catch (error) {
      console.error("Error fetching next day forecast:", error);
    }
  };

  const fetchNextDayForecast5 = async (targetCity) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);

    // Format the date to the required format
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: targetCity,
        days: "1",
        dt: formattedDate, // This can be made dynamic based on your needs
      },
      headers: {
        "X-RapidAPI-Key": "930fa074ecmshc8073cd18305a48p147ed6jsn943c497ba270",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setNextDayForecast5(response.data);
    } catch (error) {
      console.error("Error fetching next day forecast:", error);
    }
  };

  const fetchNextDayForecast6 = async (targetCity) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 6);

    // Format the date to the required format
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: targetCity,
        days: "1",
        dt: formattedDate, // This can be made dynamic based on your needs
      },
      headers: {
        "X-RapidAPI-Key": "930fa074ecmshc8073cd18305a48p147ed6jsn943c497ba270",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setNextDayForecast6(response.data);
    } catch (error) {
      console.error("Error fetching next day forecast:", error);
    }
  };

  const fetchNextDayForecast7 = async (targetCity) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);

    // Format the date to the required format
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: targetCity,
        days: "1",
        dt: formattedDate, // This can be made dynamic based on your needs
      },
      headers: {
        "X-RapidAPI-Key": "930fa074ecmshc8073cd18305a48p147ed6jsn943c497ba270",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setNextDayForecast7(response.data);
    } catch (error) {
      console.error("Error fetching next day forecast:", error);
    }
  };

  const fetchMoonPhase = async (city) => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/astronomy.json",
      params: { q: city },
      headers: {
        "X-RapidAPI-Key": "2fe747f22cmsha28e53f7e74f595p1de63fjsn34fad9ddacb0", // Please replace with your key
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      if (response && response.data && response.data.astronomy) {
        setMoonDetails(response.data.astronomy.astro);
      }
    } catch (error) {
      console.error("Error fetching moon phase data", error);
    }
  };

  const getAirQualityText = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };

  const getUVIText = (uvi) => {
    if (uvi >= 0 && uvi <= 2) return "Low";
    if (uvi >= 3 && uvi <= 5) return "Moderate";
    if (uvi >= 6 && uvi <= 7) return "High";
    if (uvi >= 8 && uvi <= 10) return "Very High";
    if (uvi >= 11) return "Extreme";
    return "Unknown";
  };

  const fetchWeather = async () => {
    try {
      // 1. Fetching coordinates of the city
      const geoResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
      );
      const geoData = await geoResponse.json();

      if (geoData && geoData.length > 0) {
        const { lat, lon } = geoData[0]; // Taking the first result

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        const forecastData = await forecastResponse.json();

        if (forecastData.cod === "200") {
          setForecastData(forecastData.list);
        } else {
          alert(forecastData.message);
        }
        // 2. Fetching the weather data
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        const weatherData = await weatherResponse.json();

        if (weatherData.cod === 200) {
          // Fetching the air pollution data
          const airQualityResponse = await fetch(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
          );
          const airQualityData = await airQualityResponse.json();

          // Merge both weather and air quality data
          setWeather({ ...weatherData, air_quality: airQualityData });
        } else {
          alert(weatherData.message);
        }
      } else {
        alert("Cannot find the coordinates of the city.");
      }
    } catch (error) {
      console.error("There was an error fetching the data", error);
    }
    fetchMoonPhase(city);
  };

  useEffect(() => {
    // This will run the fetchWeather function whenever the page loads and whenever 'city' changes.
    // fetchWeather();

    const inputElem = document.getElementById("city-input");

    const handleEnterKey = (event) => {
      if (event.key === "Enter") {
        fetchWeather();
        fetchNextDayForecast(city);
        fetchNextDayForecast2(city);
        fetchNextDayForecast3(city);
        fetchNextDayForecast4(city);
        fetchNextDayForecast5(city);
        fetchNextDayForecast6(city);
        fetchNextDayForecast7(city);
      }
    };

    if (inputElem) {
      inputElem.addEventListener("keydown", handleEnterKey);
    }

    return () => {
      if (inputElem) {
        inputElem.removeEventListener("keydown", handleEnterKey);
      }
    };
  }, [city]); // Dependency array includes 'city' so useEffect runs when 'city' changes.

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="search">
          <div className="dropbtn">
            <div className="icon">
              <i className="fa fa-search"></i>
            </div>
            <div className="input">
              <div>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                      fetchWeather();
                      fetchNextDayForecast(city);
                      fetchNextDayForecast2(city);
                      fetchNextDayForecast3(city);
                      fetchNextDayForecast4(city);
                      fetchNextDayForecast5(city);
                      fetchNextDayForecast6(city);
                      fetchNextDayForecast7(city);
                    }
                  }}
                  placeholder="Enter city name"
                />
                <button onClick={fetchWeather} id="get-weather">
                  Get Weather
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <body>
        <div className="row">
          <div className="column left">
            <div className="box">
              <h3>Air Quality</h3>
              {weather && weather.air_quality && weather.air_quality.list && (
                <div>
                  <h4>{weather.air_quality.list[0].main.aqi}</h4>
                  <small>
                    {getAirQualityText(weather.air_quality.list[0].main.aqi)}
                  </small>
                </div>
              )}
            </div>
            <div className="box">
              <h3>Precipitation</h3>
              {weather && weather.rain ? (
                <div>
                  <h4>{weather.rain["1h"]}</h4>
                  <small>mm in last hour</small>
                </div>
              ) : (
                <div>
                  <h4>N/A</h4>
                  <small>No data available</small>
                </div>
              )}
            </div>
            <div className="box">
              <h3>Wind</h3>
              {weather && weather.wind && (
                <div>
                  <h4>{weather.wind.speed} </h4>
                  <small>mph kmph</small>
                </div>
              )}
            </div>
            <div className="box">
              <h3>Pressure</h3>
              {weather && weather.main && (
                <div>
                  <h4>{weather.main.pressure}</h4>
                  <small>mb in</small>
                </div>
              )}
            </div>
            <div className="box">
              <h3>Visibility</h3>

              {weather && weather.visibility && (
                <div>
                  <h4>{weather.visibility / 1000}</h4>
                  <small> km mi</small>
                </div>
              )}
            </div>
            <div className="box">
              <h3>UV Index</h3>
              {weather && weather.uvi ? (
                <div>
                  <h4>{weather.uvi}</h4>
                  <small>{getUVIText(weather.uvi)}</small>
                </div>
              ) : (
                <div>
                  <h4>N/A</h4>
                  <small>No data available</small>
                </div>
              )}
            </div>
          </div>
          <div className="column middle">
            {weather && (
              <div>
                <h1>{weather.name}</h1>
              </div>
            )}

            <div className="innermiddle" id="clouds-sun">
              {weather &&
                weather.weather &&
                weather.weather[0] &&
                weather.weather[0].description && (
                  <img
                    src={`/images/${weather.weather[0].description}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                )}
            </div>

            <div className="innermiddle" id="feels-like">
              {weather &&
                weather.main &&
                weather.weather &&
                weather.weather[0] && (
                  <div>
                    <p>{Math.round(weather.main.temp - 273.15)}°C</p>
                    <p>
                      <small>{weather.weather[0].description}</small>
                    </p>
                  </div>
                )}
            </div>
            <div className="innermiddle" id="degrees">
              <b>F</b>
              <p>C</p>
            </div>

            <div className="innermiddle" id="degree">
              {weather && (
                <div>
                  <p>
                    H: {weather.main.temp_max.toFixed(1)}
                    <sup>°</sup>C
                  </p>
                  <p>
                    L: {weather.main.temp_min.toFixed(1)}
                    <sup>°</sup>C
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="column right">
            <div className="box2">
              <img
                src="/images/moon.png"
                className="fullmoon"
                alt="Full Moon"
              />
              {moonDetails && (
                <div>
                  <h3>
                    {new Date(forecastData[0].dt_txt).toLocaleDateString()}
                  </h3>
                  <p>Moon Phase: {moonDetails.moon_phase}</p>
                  <p>Moon Illumination: {moonDetails.moon_illumination}%</p>
                  <p>Moonrise: {moonDetails.moonrise}</p>
                  <p>Moonset: {moonDetails.moonset}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <h2> 5-days forecast</h2>
        </div>
        <div className="row row-days">
          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              {forecastData.length > 0 && (
                <div>
                  <img
                    src={`/images/${forecastData[4].weather[0].description}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p className="temp">
                    H: {Math.round(forecastData[4].main.temp_max - 273.15)}
                    °C&nbsp;&nbsp; L:{" "}
                    {Math.round(forecastData[4].main.temp_min - 273.15)}°C
                  </p>
                  <p className="temp">
                    {" "}
                    {forecastData[4].weather[0].description}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Tuesday</p>
              {forecastData.length > 0 && (
                <div>
                  <img
                    src={`/images/${forecastData[8].weather[0].description}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p className="temp">
                    H: {Math.round(forecastData[8].main.temp_max - 273.15)}
                    °C&nbsp;&nbsp; L:{" "}
                    {Math.round(forecastData[8].main.temp_min - 273.15)}°C
                  </p>
                  <p className="temp">
                    {" "}
                    {forecastData[8].weather[0].description}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Wednesday</p>
              {forecastData.length > 0 && (
                <div>
                  <img
                    src={`/images/${forecastData[12].weather[0].description}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p className="temp">
                    H: {Math.round(forecastData[12].main.temp_max - 273.15)}
                    °C&nbsp;&nbsp; L:{" "}
                    {Math.round(forecastData[12].main.temp_min - 273.15)}°C
                  </p>
                  <p className="temp">
                    {" "}
                    {forecastData[12].weather[0].description}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Thursday</p>
              {forecastData.length > 0 && (
                <div>
                  <img
                    src={`/images/${forecastData[16].weather[0].description}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p className="temp">
                    H: {Math.round(forecastData[16].main.temp_max - 273.15)}
                    °C&nbsp;&nbsp; L:{" "}
                    {Math.round(forecastData[16].main.temp_min - 273.15)}°C
                  </p>
                  <p className="temp">
                    {" "}
                    {forecastData[16].weather[0].description}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="column-days">
            <div className="box-days">
              <p>Friday</p>
              {forecastData.length > 0 && (
                <div>
                  <img
                    src={`/images/${forecastData[20].weather[0].description}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p className="temp">
                    H: {Math.round(forecastData[20].main.temp_max - 273.15)}
                    °C&nbsp;&nbsp; L:{" "}
                    {Math.round(forecastData[20].main.temp_min - 273.15)}°C
                  </p>
                  <p className="temp">
                    {" "}
                    {forecastData[20].weather[0].description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <h2> last 7-days</h2>
        </div>
        <div className="row row-days2">
          <div className="column-days2">
            <div className="box-days">
              <p>Sunday</p>
              {nextDayForecast &&
              nextDayForecast.location &&
              nextDayForecast.forecast &&
              nextDayForecast.forecast.forecastday &&
              nextDayForecast.forecast.forecastday[0] ? (
                <>
                  <img
                    src={`/images/${nextDayForecast.forecast.forecastday[0].day.condition.text}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p>
                    T: {nextDayForecast.forecast.forecastday[0].day.avgtemp_c}°C
                  </p>
                  <p>
                    {nextDayForecast.forecast.forecastday[0].day.condition.text}
                  </p>
                </>
              ) : (
                <p>Loading forecast...</p>
              )}
            </div>
          </div>
          <div className="column-days2">
            <div className="box-days">
              <p>Monday</p>
              {nextDayForecast2 &&
              nextDayForecast2.location &&
              nextDayForecast2.forecast &&
              nextDayForecast2.forecast.forecastday &&
              nextDayForecast2.forecast.forecastday[0] ? (
                <>
                  <img
                    src={`/images/${nextDayForecast2.forecast.forecastday[0].day.condition.text}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p>
                    T: {nextDayForecast2.forecast.forecastday[0].day.avgtemp_c}
                    °C
                  </p>
                  <p>
                    {
                      nextDayForecast2.forecast.forecastday[0].day.condition
                        .text
                    }
                  </p>
                </>
              ) : (
                <p>Loading forecast...</p>
              )}
            </div>
          </div>
          <div className="column-days2">
            <div className="box-days">
              <p>Tuesday</p>
              {nextDayForecast3 &&
              nextDayForecast3.location &&
              nextDayForecast3.forecast &&
              nextDayForecast3.forecast.forecastday &&
              nextDayForecast3.forecast.forecastday[0] ? (
                <>
                  <img
                    src={`/images/${nextDayForecast3.forecast.forecastday[0].day.condition.text}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p>
                    T: {nextDayForecast3.forecast.forecastday[0].day.avgtemp_c}
                    °C
                  </p>
                  <p>
                    {
                      nextDayForecast3.forecast.forecastday[0].day.condition
                        .text
                    }
                  </p>
                </>
              ) : (
                <p>Loading forecast...</p>
              )}
            </div>
          </div>
          <div className="column-days2">
            <div className="box-days">
              <p>Wednesday</p>
              {nextDayForecast4 &&
              nextDayForecast4.location &&
              nextDayForecast4.forecast &&
              nextDayForecast4.forecast.forecastday &&
              nextDayForecast4.forecast.forecastday[0] ? (
                <>
                  <img
                    src={`/images/${nextDayForecast4.forecast.forecastday[0].day.condition.text}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p>
                    T: {nextDayForecast4.forecast.forecastday[0].day.avgtemp_c}
                    °C
                  </p>
                  <p>
                    {
                      nextDayForecast4.forecast.forecastday[0].day.condition
                        .text
                    }
                  </p>
                </>
              ) : (
                <p>Loading forecast...</p>
              )}
            </div>
          </div>
          <div className="column-days2">
            <div className="box-days">
              <p>Thursday</p>
              {nextDayForecast5 &&
              nextDayForecast5.location &&
              nextDayForecast5.forecast &&
              nextDayForecast5.forecast.forecastday &&
              nextDayForecast5.forecast.forecastday[0] ? (
                <>
                  <img
                    src={`/images/${nextDayForecast5.forecast.forecastday[0].day.condition.text}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p>
                    T: {nextDayForecast5.forecast.forecastday[0].day.avgtemp_c}
                    °C
                  </p>
                  <p>
                    {
                      nextDayForecast5.forecast.forecastday[0].day.condition
                        .text
                    }
                  </p>
                </>
              ) : (
                <p>Loading forecast...</p>
              )}
            </div>
          </div>
          <div className="column-days2">
            <div className="box-days">
              <p>Friday</p>
              {nextDayForecast6 &&
              nextDayForecast6.location &&
              nextDayForecast6.forecast &&
              nextDayForecast6.forecast.forecastday &&
              nextDayForecast6.forecast.forecastday[0] ? (
                <>
                  <img
                    src={`/images/${nextDayForecast6.forecast.forecastday[0].day.condition.text}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p>
                    T: {nextDayForecast6.forecast.forecastday[0].day.avgtemp_c}
                    °C
                  </p>
                  <p>
                    {
                      nextDayForecast6.forecast.forecastday[0].day.condition
                        .text
                    }
                  </p>
                </>
              ) : (
                <p>Loading forecast...</p>
              )}
            </div>
          </div>
          <div className="column-days2">
            <div className="box-days">
              <p>Saturday</p>
              {nextDayForecast7 &&
              nextDayForecast7.location &&
              nextDayForecast7.forecast &&
              nextDayForecast7.forecast.forecastday &&
              nextDayForecast7.forecast.forecastday[0] ? (
                <>
                  <img
                    src={`/images/${nextDayForecast7.forecast.forecastday[0].day.condition.text}.png`}
                    className="clouds-sun"
                    alt="Weather Icon"
                  />
                  <p>
                    T: {nextDayForecast7.forecast.forecastday[0].day.avgtemp_c}
                    °C
                  </p>
                  <p>
                    {
                      nextDayForecast7.forecast.forecastday[0].day.condition
                        .text
                    }
                  </p>
                </>
              ) : (
                <p>Loading forecast...</p>
              )}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
