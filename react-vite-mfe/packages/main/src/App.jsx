import React, { Suspense } from 'react';
import Button from 'remote_app/Button';
import Button1 from 'remote_app/Button1';

const App = () => {
  const Btn1Page = React.lazy(() => import('remote_app/Button'));
  const Btn2Page = React.lazy(() => import('remote_app/Button1'));
  return (
    <>
      <Button text="hello" />
      <Button1 text="world" />
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Btn1Page text="hello suspense" />
          <Btn2Page text="world suspense" />
        </Suspense>
      </div>
    </>
  )
}

export default App;