import React, { startTransition } from 'react';
import { createRoot } from "react-dom/client";
import App from './router';

const root = createRoot(document.getElementById("root"));

startTransition(() => {
  root.render(<App />)
})