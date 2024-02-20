import React from 'react';
import './SearchList.css';

function SearchList({ cityes,isActive }) {
  const cityList = cityes.length > 0 ? cityes : null;

  if (!cityList) {
    return (
      <div></div>
    );
  }

  return (
    <div className='search_list'>
      {cityes.map((city) => (
        <div className='search_item' key={city.id}>
          <h6 className='city'>{city.name}</h6>
          <div className='list_buttom'>
          <div className='search_img'>
            <img src={city.cloudImg} alt='' />
              </div>
          <h6 className={`cityTemp ${isActive ? 'active' : 'deactive'}`}>{city.temperatureInFahrenheit}F</h6>
          <h6 className={`cityTemp ${isActive ? 'deactive' : 'active'}`}>{city.temperatureInCelsius}C</h6>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchList;
