import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '@/components/Header';
import Container from '@/components/Container';
import GlobalStyle from './GlobalStyle';
import { Global } from '@emotion/react';
import Controller from './components/Controller';

const defaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    cacheTime: 60 * 10 * 1000,
    staleTime: 60 * 10 * 1000,
    useErrorBoundary: true,
    suspense: true,
    retry: 1,
  },
};

function App() {
  const queryClient = new QueryClient({
    defaultOptions,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyle} />
      <Container>
        <Header />
        <Controller />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
