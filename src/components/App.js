import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Reviews from './Reviews/Reviews';
import Events from './EventsPage/Events';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

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
