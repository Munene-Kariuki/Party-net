import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Events from './Events';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
