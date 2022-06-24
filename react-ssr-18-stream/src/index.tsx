import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Provider from './Provider';

hydrateRoot(
  document.getElementById('root') as HTMLDivElement,
  <BrowserRouter>
    <Provider />
  </BrowserRouter>
)

