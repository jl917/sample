import { useEffect, useState } from "react";

const Network = () => {
  const [net, setNet] = useState(true);
  useEffect(() => {
    window.addEventListener('online', (event) => setNet(true));
    window.addEventListener('offline', (event) => setNet(false));
  }, []);
  if (!net) {
    throw new Error('network error')
  }
  return <>hello world!</>
}

export default Network;
