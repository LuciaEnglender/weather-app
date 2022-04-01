import React from "react";
import "./Current.css";
function Current({ current }) {
  if (current.length) {
    const { clouds, humidity, temp, wind_speed, weather } = current[0];
    const { description, icon } = weather[0];

    return (
      <div className="currentAll">
        <div className="infoWeather">
          <div className="info">
            <div>Temperatura Actual</div>
            <div>{temp}°c</div>
          </div>
          <div className="info">
            <div>Nubes</div>
            <div>{clouds}%</div>
          </div>
          <div className="info">
            <div>Humedad</div>
            <div>{humidity}%</div>
          </div>
          <div className="info">
            <div>Viento</div>
            <div>{wind_speed}mt/s</div>
          </div>
        </div>
        <div className="iconAndDescription">
          <div>
            <img
              src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"}
              width="150"
              height="150"
              alt=""
              className="icon"
            />
            <div className="descrip">{description}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="noCities">Buscá el clima en tu ciudad 🌞 </div>;
  }
}

export default Current;
