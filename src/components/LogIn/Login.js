import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'

function Login() {

  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //Redirect to home page
  function handleSubmit(e) {
    e.preventDefault()
    setFormData({
      email: "",
      password: ""
    })
    return navigate('/')
  }

  return (
    <form className='loginForm' onSubmit={handleSubmit}>
      <input placeholder='Email' type='text' name='email' value={formData.email} onChange={handleChange} />
      <input placeholder='Password' type='password' name='password' value={formData.password} onChange={handleChange} />
      <input type='submit' value='Log in' />
    </form>
  )
}

export default Login