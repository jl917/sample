import { startTransition } from 'react';
import { createRoot } from "react-dom/client";
import App from './App';

const root = createRoot(document.getElementById("root"));

startTransition(() => {
  root.render(<App />)
})
