import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface Props {
  children: React.ReactNode;
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // default 0
      retry: 1, // default 6
      retryDelay: 1000, // default 1000
    },
  },
});

const ReactQuery = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQuery;
