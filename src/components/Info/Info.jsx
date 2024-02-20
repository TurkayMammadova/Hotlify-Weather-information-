import React from 'react'
import './Info.css'
import Location from './icon _location.png'
import Temperature from './icon _temperature.png'


function Info({cityes,date,isActive}) {
const theLastOne = cityes.length > 0 ? cityes[0] : null;

if (!theLastOne) {
  return <div className='no_city' >No city information available...</div>;
}
  return (
    <>
    <div className='info'>
      <div className='info-top'>
        <div>
        <h3>{theLastOne.name}</h3>
        <img className='location' src={Location} alt=''/>
        </div>
        <h4 className='dateInfo'>{date}</h4>
      </div>
      <div className='degree-info'>
        <img className='temperature' src={Temperature} alt='' />
        <h2 className={`celsium ${isActive ? 'active' : 'deactive'}`}>{theLastOne.temperatureInFahrenheit}F</h2>
          <h2 className={`fahrenheit ${isActive ? 'deactive' : 'active'}`}>{theLastOne.temperatureInCelsius}C</h2>


        {theLastOne.cloudImg && <img className='cloud' src={theLastOne.cloudImg} alt='Weather' />}
        </div>
      <div className='info-buttom'>
        <div>
          <h5>HUMDITY</h5>
          <p>{theLastOne.humidity}%</p>
        </div>
        <div>
        <h5>WIND</h5>
        <p>{theLastOne.wind}mph</p>
        </div>
       
      </div>

    </div>
    
    </>
  )
}

export default Info