import { startTransition } from 'react';
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root") as HTMLElement);

startTransition(() => {
  root.render(<div data-testid="hello" data-test="daolang">123</div>)
})
