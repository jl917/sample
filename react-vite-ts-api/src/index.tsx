import { startTransition } from 'react';
import { createRoot } from 'react-dom/client'
import init from './mock/init';
import App from './App';

const root = createRoot(document.getElementById("root") as HTMLElement);

if (import.meta.env.MODE === 'mock') {
  await init();
}

startTransition(() => {
  root.render(<App />)
})
