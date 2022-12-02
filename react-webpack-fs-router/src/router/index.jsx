import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

const routes = __ROUTES__;

console.log(routes);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({path, elementPath}) => <Route path={path} key={path} element={Loader(elementPath)} />)}
      </Routes>
    </BrowserRouter>
  )
};

export default Router;