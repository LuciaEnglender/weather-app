import React, { useState } from "react";
import "./SearchBar.css";
function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div>
      <div class="mr-3 md:mr-0 md:block ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(city);
            e.target.value = "";
          }}
        >
          <button type="submit" className="buton">
            <i class="gg-search"></i>
          </button>

          <input
            type="text"
            id="email-adress-icon"
            className="busquedaInput"
            placeholder="Search..."
            onChange={(e) => setCity(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
