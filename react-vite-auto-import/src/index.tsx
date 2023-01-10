import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root") as HTMLElement);

startTransition(() => {
  root.render(<div>123</div>)
})
