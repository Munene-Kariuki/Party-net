import React from 'react'
import './Event.css'

function Event({ dataObj }) {
  //Destructure props
  const {name, image, date, price, venue, location} = dataObj


  return (
    // create a card for each object 
    <div className='card'>
      <img className='card-image' src={image} alt='pic' />
      <p className='price'>{price}</p>
      <div className='card-body'>
        <div className='date'>
          <h4 className='month'>{date[0]}</h4>
          <p className='day'>{date[1]}</p>
        </div>
        <div className='description'>
          <h3 className='name'>{name}</h3>
        </div>
      </div>
    </div>
  )
}

export default Event