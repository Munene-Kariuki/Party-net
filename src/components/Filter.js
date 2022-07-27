import React from 'react'
import './Filter.css'

function Filter({onCategoryChange, onSearchChange, search}) {
  return (
    <div className='filter'>
      <input type='text' name='search' placeholder='Search by name' value={search} onChange={onSearchChange} />
      <select name='sort' onChange={onCategoryChange}>
        <option value='All'>All</option>
        <option value='Nairobi'>Nairobi</option>
        <option value='Kisumu'>Kisumu</option>
        <option value='Mombasa'>Mombasa</option>
        <option value='Embu'>Embu</option>
        <option value='Nakuru'>Nakuru</option>
      </select>
    </div>
  )
}

export default Filter