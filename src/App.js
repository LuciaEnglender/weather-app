import SearchBar from "./SearchBar";
import axios from "axios";
import "./App.css";
import { useState } from "react";
import Current from "./Current";
import Hourly from "./Hourly";
import Daily from "./Daily";


function App() {
  const [current, setCurrent] = useState([]);
  const [daily, setDaily] = useState([]);
  const [hours, setHours] = useState([]);
  const [city, setCity] = useState("");

  const week = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const today = new Date().getDay();
  const sortedDay = week.splice(today);
  for (let i = 0; i < week.length; i++) {
    sortedDay.push(week[i]);
  }
  sortedDay.push(sortedDay[0]);

  const hourNow = new Date().getHours();
  const hoursTodayAndTomorrow = [];
  for (let i = 0; i < 24; i++) {
    if (hourNow + i > 23) {
      hoursTodayAndTomorrow.push(hourNow + i - 24);
    } else {
      hoursTodayAndTomorrow.push(hourNow + i);
    }
  }
  const hours48 = [...hoursTodayAndTomorrow, ...hoursTodayAndTomorrow];

  const hora = new Date().getHours();
  const minutos = new Date().getMinutes();
  const letras = hora < 12 ? "am" : "pm";

  async function onSearch(city) {
    try {
      const currentWeatherInfo = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );

      if (currentWeatherInfo) {
        const ciudad = {
          latitud: currentWeatherInfo.data.coord.lat,
          longitud: currentWeatherInfo.data.coord.lon,
          name: currentWeatherInfo.data.name,
        };

        const extendedWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${ciudad.latitud}&lon=${ciudad.longitud}&lang=es&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );

        setCity(ciudad.name);
        setCurrent([extendedWeather.data.current]);
        setDaily([extendedWeather.data.daily]);
        setHours([extendedWeather.data.hourly]);
      } else {
        alert("Ciudad no encontrada");
      }
    } catch (error) {
      alert("Ciudad no encontrada");
    }
  }

  return (
    <div className="App">
      <div className="nameAndSearch">
        <div className="search">
          <SearchBar onSearch={onSearch} />
        </div>
        <div className="horas">
          {minutos < 9
            ? `${hora}:0${minutos}${letras}`
            : `${hora}:${minutos}${letras}`}
        </div>
        <div className="nameCity">{city}</div>
      </div>
      <div className="cards">
        <div>
          <Current current={current} />
        </div>

        <div className="Hourly">
          {hours[0]?.map((h, i) => (
            <Hourly hour={hours48[i]} weather={h.weather} temp={h.temp} />
          ))}
        </div>
        <div className="Daily">
          {daily[0]?.map((d, i) => (
            <Daily day={sortedDay[i]} temp={d.temp} weather={d.weather} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
