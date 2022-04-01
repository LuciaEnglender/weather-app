import React from "react";
import "./Hourly.css";
function Hourly({ weather, temp, hour }) {
  return (
    <div className="hoursAll">
      <div>{hour > 9 ? hour : `0${hour}`}</div>
      <div>{temp}°c</div>
      <img
        className="imagen"
        src={"http://openweathermap.org/img/wn/" + weather[0].icon + "@2x.png"}
        width="40"
        height="40"
        alt=""
      />
    </div>
  );
}

export default Hourly;
