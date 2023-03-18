import { startTransition } from 'react';
import { createRoot, hydrateRoot } from "react-dom/client";
import App from './router';

// const root = createRoot(document.getElementById("root"));

startTransition(() => {
  hydrateRoot(document.getElementById("root"), <App />);
  // root.render(<App />)
})
