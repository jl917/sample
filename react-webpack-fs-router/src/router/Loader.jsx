import { Suspense } from 'react';

const Loader = (elementPath) => {
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