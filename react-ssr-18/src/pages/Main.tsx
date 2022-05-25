import React from 'react';
import { atomCount } from '../store';
import { useRecoilValue } from 'recoil';

const Main = () => {
  const [count, setCount] = React.useState(0);
  const aCount = useRecoilValue(atomCount)

  return (
    <div>
      <h1>{count}</h1>
      <h2>{aCount}</h2>
      <div>Main5</div>
    </div>
  )
}

export default Main;
