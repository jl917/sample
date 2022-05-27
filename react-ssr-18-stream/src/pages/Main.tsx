import React from 'react';
import { atomCount } from '../store';
import { useRecoilState } from 'recoil';

const Main = () => {
  const [count, setCount] = React.useState(0);
  const [aCount, setACount] = useRecoilState(atomCount)

  return (
    <div>
      <h1>{count}</h1>
      <h2>{aCount}</h2>
      <div>Main5</div>
      <button onClick={() => setACount(aCount+1)}>plus</button>
    </div>
  )
}

export default Main;
