import { RecoilRoot } from 'recoil';
import React from 'react';
import Router from './Router';
import { atomCount, COUNT_DEFAULT_VALUE } from './store';
import { QueryClientProvider, QueryClient } from 'react-query';

const initializeState = ({ set }: any) => {
  set(atomCount, COUNT_DEFAULT_VALUE);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // default 0
      cacheTime: 0, // default 5 minitue 1000 * 60 * 5
      retry: 1, // default 6
      retryDelay: 1000, // default 1000
      suspense: true
    },
  },
});

const Provider = () => (
  <>
    <QueryClientProvider client={queryClient}>
    <RecoilRoot initializeState={initializeState}>
      <Router />
    </RecoilRoot>
    </QueryClientProvider>
  </>
)

export default Provider;
