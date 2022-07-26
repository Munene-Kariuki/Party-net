import React from 'react'
import './Navbar.css'
import logo_icon from '../logo_icon.svg'

function Navbar() {
  return (
    <nav>
      <div>
        <img src={logo_icon} alt='logo' className='app-logo' />
      </div>
      <div className='links'>
        <ul>
          <li><a>Home</a></li>
          <li><a>Events</a></li>
          <li><a>About us</a></li>
        </ul>
      </div>
      <div className='buttons'>
        <button className='login'>Log in</button>
        <button className='signin'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar