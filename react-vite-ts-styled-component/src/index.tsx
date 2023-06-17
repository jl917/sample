import { startTransition } from 'react';
import { createRoot } from 'react-dom/client'
import styled from 'styled-components';

const Title = styled.div`
  font-size: 66px;
`

const root = createRoot(document.getElementById("root") as HTMLElement);

startTransition(() => {
  root.render(<Title>123</Title>)
})
