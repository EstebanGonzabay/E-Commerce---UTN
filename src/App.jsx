import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Screens/Home/Home';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import Register from './Screens/Register/Register';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginScreen />} />
    <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;