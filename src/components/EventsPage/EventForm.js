import React, { useState } from 'react'
import './EventForm.css'

function EventForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    date: "",
    price: "",
    venue: "",
    location: ""
  })

  //update form data
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //handle form submit
  function handleSubmit(e) {
    e.preventDefault()
    onFormSubmit(formData)
    setFormData({
      name: "",
      image: "",
      date: "",
      price: "",
      venue: "",
      location: ""
    })
  }

  return (
    <div>
      <h2>Add event:</h2>
      <form className='new-event' onSubmit={handleSubmit}>
        <input placeholder='Name' type='text' name='name' onChange={handleChange} value={formData.name} />
        <input placeholder='Image' type='text' name='image' onChange={handleChange} value={formData.image} />
        <input placeholder='Date' type='text' name='date' onChange={handleChange} value={formData.date} />
        <input placeholder='Price' type='number' name='price' onChange={handleChange} value={formData.price} />
        <input placeholder='Venue' type='text' name='venue' onChange={handleChange} value={formData.venue} />
        <input placeholder='Location' type='text' name='location' onChange={handleChange} value={formData.location} />
        <input type='submit' value='Post event' />
    </form>
    </div>
  )
}

export default EventForm