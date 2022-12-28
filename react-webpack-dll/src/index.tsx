import { createRoot } from "react-dom/client";
import { Button } from "antd";

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<Button>hello app</Button>);
