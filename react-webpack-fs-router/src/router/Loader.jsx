import React, { Suspense } from 'react';

const Loader = (elementPath) => {
  console.log(elementPath);
  const Page = React.lazy(() => import(`../pages/${elementPath}`));
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Page />
      </Suspense>
    </div>
  );
};

export default Loader;