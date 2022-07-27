import React, { useEffect, useState } from 'react'
import './Events.css'
import Event from './Event'

function Events() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((r) => setData(r))
  }, [])
  console.log(data)

  const displayEvents = data.map((eventObj) => {
    return <Event dataObj={eventObj} />
  })

  return (
    <div>
      <div>
        <img src='https://thumbs.dreamstime.com/b/silhouettes-concert-crowd-front-bright-stage-lights-64551199.jpg' alt='events' className='image' />
        <div className='image-text'>
          <div>
            <h2 className='title'>Upcoming events</h2>
          </div>
          <button className='btn'>Post an event</button>
        </div>
      </div>
      <h2>Events hub</h2>
      {displayEvents}
    </div>
  )
}

export default Events