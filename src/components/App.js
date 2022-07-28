import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Reviews from './Reviews';
import Events from './Events';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/reviews' element={<Reviews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
