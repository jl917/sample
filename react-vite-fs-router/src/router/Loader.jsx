import React, { Suspense } from 'react';

const Loader = (lazy) => {
  const Page = React.lazy(lazy);
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Page />
      </Suspense>
    </div>
  );
};

export default Loader;
