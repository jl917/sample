import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import About from './pages/About'
import Nav from './Nav';

const Router = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
)

export default Router;
