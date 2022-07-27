import React, { useState } from 'react'

function EventForm() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    date: "",
    price: "",
    venue: "",
    location: ""
  })

  function handleChange(e) {
    console.log("changed")
  }

  return (
    <form className='new-event'>
      <label>
        Name:
        <input type='text' name='name' onChange={handleChange} value={formData.name} />
      </label>
      <label>
        Image:
        <input type='text' name='image' onChange={handleChange} value={formData.image} />
      </label>
      <label>
        Date:
        <input type='text' name='date' onChange={handleChange} value={formData.date} />
      </label>
      <label>
        Price:
        <input type='text' name='price' onChange={handleChange} value={formData.price} />
      </label>
      <label>
        Venue:
        <input type='text' name='venue' onChange={handleChange} value={formData.venue} />
      </label>
      <label>
        Location:
        <input type='text' name='location' onChange={handleChange} value={formData.location} />
      </label>
    </form>
  )
}

export default EventForm