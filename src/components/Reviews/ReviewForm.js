import React, { useState } from 'react'

function ReviewForm({onReviewFormSubmit}) {

  const [formData, setFormData] = useState({
    name: "",
    review: "",
  })

  //Update formData
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //Handle form submit
  function handleSubmit(event) {
    event.preventDefault()
    onReviewFormSubmit(formData)
    setFormData({
      name: "",
      review: "",
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Name' value={formData.name} type="text" name='name' onChange={handleChange} />
      <input placeholder='Review' value={formData.review} type="text" name='review' onChange={handleChange} />
      <input type='submit' value='Post review' />
    </form>
  )
}

export default ReviewForm