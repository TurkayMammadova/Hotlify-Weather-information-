
import React from 'react';
import './TemperatureUnit.css';

function TemperatureUnit({ toggleTemperatureUnit, isActive }) {
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          checked={isActive}
          onChange={toggleTemperatureUnit}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          F
        </label>
      </div>
    </>
  );
}

export default TemperatureUnit;
