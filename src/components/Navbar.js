import React from 'react'
import './Navbar.css'
import logo_icon from '../logo_icon.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div>
        <img src={logo_icon} alt='logo' className='app-logo' />
      </div>
      <div className='links'>
        <ul>
          <li><NavLink to="/" exact >Home</NavLink></li>
          <li><NavLink to="/events" exact >Events</NavLink></li>
          <li><NavLink to="/aboutus" exact >About us</NavLink></li>
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