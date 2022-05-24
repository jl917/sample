import React from 'react';

const Main = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <div>Main</div>
    </div>
  )
}

export default Main;
