import React from "react";
import "./Daily.css";
function Daily({ temp, weather, day }) {
  return (
    <div className="dayAll">
      <div>{day}</div>
      <div className="tempMinMax">
        <div className="temperaturaDaily">
          <div>Min</div>
          <div>{temp.min}°c</div>
        </div>
        <div className="temperaturaDaily">
          <div>Max</div>
          <div>{temp.max}°c</div>
        </div>
      </div>

      <div>
        <img
          className="imagen"
          src={
            "http://openweathermap.org/img/wn/" + weather[0].icon + "@2x.png"
          }
          width="70"
          height="70"
          alt=""
        />
      </div>
    </div>
  );
}

export default Daily;
