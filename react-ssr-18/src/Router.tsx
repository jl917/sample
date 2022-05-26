import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import About from './pages/About'
import RandomUser from './pages/RandomUser'
import Nav from './Nav';

const Router = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/randomUser" element={<RandomUser />} />

      {/* <Route path="/randomUser" element={Ut(RandomUser)} /> */}
    </Routes>
  </>
)

export default Router;
