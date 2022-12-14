import { startTransition } from 'react';
import { createRoot } from "react-dom/client";
import StyledComponents from './components/StyledComponents'

const root = createRoot(document.getElementById("root"));

startTransition(() => {
  root.render(
    <>
      <StyledComponents />
    </>
  )
})
