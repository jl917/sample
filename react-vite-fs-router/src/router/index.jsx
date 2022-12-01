import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

const routes = window.__ROUTES__;
 
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={Loader('index.page')} />
        {Object.entries(routes).map(([path, elementPath]) => (
          <Route path={path} key={path} element={Loader(elementPath)} />
        ))}
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
