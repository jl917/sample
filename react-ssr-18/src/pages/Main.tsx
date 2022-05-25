import React from 'react';

const Main = () => {
  const [count, setCount] = React.useState(0);

  console.log(123);
  return (
    <div>
      <h1>{count}</h1>
      <div>Main5</div>
    </div>
  )
}

export default Main;
