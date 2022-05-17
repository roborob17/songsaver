import React from 'react';
import './App.css';
import SongOverview from './components/SongOverview';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className='everything'>
        <Header />
        <Routes>
          <Route exact path="/" element={<SongOverview />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;