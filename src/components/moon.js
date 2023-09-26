import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherInfo(moonPhase) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/astronomy.json",
        params: { q: "Sibiu" },
        headers: {
          "X-RapidAPI-Key":
            "2fe747f22cmsha28e53f7e74f595p1de63fjsn34fad9ddacb0",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  const {
    astronomy: { astro },
    country,
    localtime,
  } = data;

  return (
    <div>
      <h3>Moon Phase</h3>
      <p>{moonPhase}</p>
    </div>
  );
}

export default WeatherInfo;
