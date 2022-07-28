import React from 'react'
import './Navbar.css'
import logo_icon from '../logo_icon.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    // background: "blue",
    textDecoration: "none",
    color: "white",
  };
  return (
    <nav>
      <div>
        <img src={logo_icon} alt='logo' className='app-logo' />
      </div>
      <div className='links'>
        <ul>
          <li><NavLink exact to="/" style={linkStyles} >Home</NavLink></li>
          <li><NavLink to="/events" style={linkStyles} exact >Events</NavLink></li>
          <li><NavLink to="/reviews" style={linkStyles} >Reviews</NavLink></li>
        </ul>
      </div>
      <div className='buttons'>
        <NavLink to="/login"><button className='login'>Log in</button></NavLink>
      </div>
    </nav>
  )
}

export default Navbar