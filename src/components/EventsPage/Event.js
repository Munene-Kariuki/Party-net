import React from 'react'
import { Link } from "react-router-dom";
import './Event.css'

function Event({ dataObj }) {
  //Destructure props
  const {name, image, date, price, venue, location} = dataObj

  const dateArray = date.split(" ")


  return (
    // create a card for each object 
    <Link to={`/events/${dataObj.id}`} style={{ textDecoration: 'none' }} >
      <div className='card' >
        <img className='card-image' src={image} alt='pic' />
        <p className='price'>{price}</p>
        <div className='card-body'>
          <div className='date'>
            <h4 className='month'>{dateArray[0]}</h4>
            <p className='day'>{dateArray[1]}</p>
          </div>
          <div className='description'>
            <h3 className='name'>{name}</h3>
            <p className='venue'>{venue}</p>
            <p className='location'>{location}</p>
          </div>
        </div>
        <div className='socio'>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </Link>
  )
}

export default Event