import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import data from './data.json';

const App = () => {
  const lottieRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottie.loadAnimation({
        container: lottieRef.current, // the dom element that will contain the animation
        renderer: "canvas",
        loop: true,
        autoplay: true,
        animationData: data, // the path to the animation json
      });
    }
  }, []);

  return (
    <div>
      <h1>animation</h1>
      <button ref={lottieRef} onClick={() => {console.log(123123)}} style={{width: 100, height: 100}}></button>
    </div>
  );
};

export default App;
