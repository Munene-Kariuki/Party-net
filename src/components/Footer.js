import React from 'react'
import logo_icon from '../logo_icon.svg'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div>
        <div className='title'>
          <img src={logo_icon} alt='logo' className='appLogo' />
          <h2>Party-net</h2>
        </div>
        <div className='social-icons'>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-twitter"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div>
        <h2 className='header'>Contact details</h2>
        <p><span className='span'><i class="fa-solid fa-phone"></i></span>+254 700112244</p>
        <p><span className='span'><i class="fa-solid fa-phone"></i></span>+254 711334488</p>
        <p><span className='span'><i class="fa-solid fa-envelope-open"></i></span>partynet@gmail.com</p>
        <p><span className='span'><i class="fa-solid fa-location-dot"></i></span>Nairobi, Kenya - 4001004</p>
      </div>
      <div>
        <h2 className='header'>Quick links</h2>
        <p><span className='span'><i class="fa-solid fa-arrow-right-long"></i></span>Home</p>
        <p><span className='span'><i class="fa-solid fa-arrow-right-long"></i></span>Events</p>
        <p><span className='span'><i class="fa-solid fa-arrow-right-long"></i></span>About us</p>
        <p><span className='span'><i class="fa-solid fa-arrow-right-long"></i></span>Sign up</p>
      </div>
      <img src='https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png' alt='google play' className='google-play' />
    </div>
  )
}

export default Footer