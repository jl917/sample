import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

const modules = import.meta.glob('../pages/**/*.page.jsx');
const routes = [];

for (const [path, lazy] of Object.entries(modules)) {
  let newPath = path.replace('../pages', '').replace('.page.jsx', '');
  routes.push({ path: newPath, lazy, });

  if (newPath.endsWith('index')) {
    newPath = newPath.slice(0, -5);
    routes.push({ path: newPath, lazy, });
  }
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({path, lazy}) => <Route path={path} key={path} element={Loader(lazy)} />)}
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
