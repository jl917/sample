import { startTransition } from 'react';
import { createRoot } from 'react-dom/client';
import Button from './component/Button';

const root = createRoot(document.getElementById('root'));

startTransition(() => {
  root.render(<Button />);
});
