// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Create from './Components/Create';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/create" element={<Create/>} />
        <Route path="/about" element={<About/>} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
};

export default App;