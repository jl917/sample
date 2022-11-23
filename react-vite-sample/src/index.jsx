import { startTransition } from 'react';
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

startTransition(() => {
  root.render(<div>123</div>)
})
