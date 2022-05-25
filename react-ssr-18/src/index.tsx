import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Router from './Router';

hydrate(
  <BrowserRouter>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root') as HTMLDivElement,
) 