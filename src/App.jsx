import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Screens/Home/Home';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import Register from './Screens/Register/Register';
import DetailProduct from './Components/HomeComponents/DetailProduct/DetailProduct';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginScreen />} />
    <Route path="/register" element={<Register />} />
    <Route path="/DetailProduct" element={<DetailProduct />} />
  </Routes>
  );
}

export default App;