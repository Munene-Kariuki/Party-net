import React, { useEffect, useState } from 'react'
import Review from './Review'
import ReviewForm from './ReviewForm'
import './Reviews.css'

function Reviews() {
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState(false)

  function handleClick() {
    setForm(!form)
  }

  //Fetch reviews from api
  useEffect(() => {
    fetch("https://powerful-springs-00947.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
  },[])

  //Display reviews
  const displayReviews = reviews.map((review) => {
    return <Review key={review.id} reviewObj={review} />
  })

  function handleReviewFormSubmit(formData) {
    fetch("https://powerful-springs-00947.herokuapp.com/reviews", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((respo) => setReviews([...reviews, respo]))
  }

  return (
    <div>
      <h2 className='reviews-title'>REVIEWS</h2>
      {displayReviews}
      <button onClick={handleClick} className='reviewBtn'>Show/Hide review form</button>
      {form ? <ReviewForm onReviewFormSubmit={handleReviewFormSubmit} />: null }
    </div>
  )
}

export default Reviews