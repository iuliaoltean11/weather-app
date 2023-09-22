import "./App.css";
import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const response = "thunde";

  /*
  const handleImg = () => {
    switch (response) {
      case value:
        break;

      default:
        break;
    } */
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "8f94345d11d9cb5fe80962dbc5b4ed1e"; // Replace with your key

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("There was an error fetching the weather data", error);
    }
  };

  useEffect(() => {
    const handleEnterKey = (event) => {
      if (event.keyCode === 13) {
        const button = document.getElementById("get-weather");
        if (button) {
          button.click();
        }
      }
    };

    // Attach the event listener
    document.addEventListener("keydown", handleEnterKey);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="dropbtn">
          <div class="icon">
            <i className="fa fa-search"></i>
          </div>
          <div class="input">
            <input form="search-form" type="text" id="mysearch"></input>
            <form id="search-form">
              <button id="search" hidden type="submit">
                Search
              </button>
            </form>

            <div>
              <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button onClick={fetchWeather} id="get-weather">
                Get Weather
              </button>
            </div>
          </div>
        </div>
      </header>

      <body>
        <div class="row">
          <div class="column left">
            <div className="box">
              <h3> Air Quality </h3>
              <h4> XX </h4>
              <small> Good </small>
            </div>
            <div className="box">
              <h3>Precipitation</h3>
              <h4>XX</h4>
              <small class="small-text">
                mm <span class="space">&nbsp;</span>in
              </small>
            </div>
            <div className="box">
              <h3>Wind</h3>
              <h4>XX</h4>
              <small class="small-text">
                mph <span class="space">&nbsp;</span>kmph
              </small>
            </div>
            <div className="box">
              <h3> Pressure </h3>
              <h4> XX </h4>
              <small class="small-text">
                mb <span class="space">&nbsp;</span>in
              </small>
            </div>
            <div className="box">
              <h3>Visibility</h3>
              <h4>XX</h4>
              <small class="small-text">
                km <span class="space">&nbsp;</span>mi
              </small>
            </div>
            <div className="box">
              <h3>UV Index</h3>
              <h4>X</h4>
              <small>High</small>
            </div>
          </div>
          <div class="column middle">
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
              <p>
                {" "}
                H:XX<sup>o</sup>
              </p>

              <p>
                {" "}
                L:XX<sup>o</sup>
              </p>
            </div>
          </div>
          <div class="column right">
            <div className="box2">
              <img src="/images/moon.png" class="fullmoon"></img>
              <h3>June 20, 2022</h3>
              <small>Phase: Full Moon</small>
              <p>
                <small>Visibility: XX%</small>
              </p>
              <p>
                <small>Distance: XXX,XXX.XX km</small>
              </p>
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
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>
          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>
        </div>

        <div className="row">
          <h2> last 7-days</h2>
        </div>
        <div className="row row-days">
          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>
          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
export default App;
