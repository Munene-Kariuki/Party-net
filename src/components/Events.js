import React, { useEffect, useState } from 'react'
import './Events.css'
import Event from './Event'

function Events() {
  const [data, setData] = useState([])

  // fetch events data from api
  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((r) => setData(r))
  }, [])
  // console.log(data)

  //Pass event data as props to Event component
  const displayEvents = data.map((eventObj) => {
    return <Event key={eventObj.id} dataObj={eventObj} />
  })

  console.log(displayEvents)


  //Render events in rows of 4
  //Mutates displayEvents into arrays of groups of 4
  function renderEvents() {
    let events = []
    let size = 4

    for(let i = 0; i < displayEvents.length; i += size ) {
      events.push(displayEvents.slice(i, i + size))
    }
    const renderEvents = events.map((eventsRow) => {
      return <div className='events'>{eventsRow}</div>
    })

    return renderEvents
  }
  // renderEvents()

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
      <h2 className='events-hub'><span className='ev'>Events</span> hub</h2>
      <div >{renderEvents()}</div>
    </div>
  )
}

export default Events