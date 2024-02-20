import React from 'react'
import './Logo.css'
import Sun from './Sun.png'
import Cloud from './Cloud.png'

function Logo() {
  return (
    <div className='logo'>
      <div className='imgLogo'>
      <img className='sun'  src={Sun} alt='' />
      <img className='cloud-top' src={Cloud} alt='' />
      </div>
    <h1>Hotlify</h1>
    </div>
  )
}

export default Logo