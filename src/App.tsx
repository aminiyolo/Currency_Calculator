import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '@/components/Header';
import Container from '@/components/Container';
import GlobalStyle from './GlobalStyle';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: 60 * 10 * 1000,
        staleTime: 60 * 10 * 1000,
        useErrorBoundary: true,
        retry: 1,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
