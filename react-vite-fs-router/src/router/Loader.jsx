import React, { Suspense } from 'react';

const Loader = (elementPath) => {
  console.log(elementPath);
  // TODO: import경로 로직 변경 필요
  // (참고: https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations)
  const Page = React.lazy(() => import(`../pages/${elementPath}.jsx`));
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Page />
      </Suspense>
    </div>
  );
};

export default Loader;
