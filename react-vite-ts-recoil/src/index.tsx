import { startTransition } from 'react';
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil';
import App from './sample/pageRecoilFamily';
import App2 from './sample/pageRecoilSelector';


const root = createRoot(document.getElementById("root") as HTMLElement);

startTransition(() => {
  root.render(<RecoilRoot><App2 /></RecoilRoot>)
})
