import { startTransition } from 'react';
import { createRoot } from 'react-dom';
import { Button } from 'antd'
const root = createRoot(document.getElementById("root"));

startTransition(() => {
  root.render(<Button>hello</Button>)
})
