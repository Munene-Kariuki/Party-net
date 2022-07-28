import React from 'react'
import './Review.css'

function Review({ reviewObj }) {

  const { name, review } = reviewObj

  return (
    <div className='review-container'>
      <h3 className='review-name'>{name}</h3>
      <p className='review'>{review}</p>
    </div>
  )
}

export default Review