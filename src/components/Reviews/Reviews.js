import React, { useEffect, useState } from 'react'
import Review from './Review'
import './Reviews.css'

function Reviews() {
  const [reviews, setReviews] = useState([])

  //Fetch reviews from api
  useEffect(() => {
    fetch(" http://localhost:8000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
  },[])

  //Display reviews
  const displayReviews = reviews.map((review) => {
    return <Review key={review.id} reviewObj={review} />
  })

  return (
    <div>
      <h2 className='reviews-title'>REVIEWS</h2>
      {displayReviews}
    </div>
  )
}

export default Reviews