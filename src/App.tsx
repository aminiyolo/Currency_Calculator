import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Controller from './components/Controller';
import useTheme from './hook/useTheme';
import ThemeProvider from './components/ThemeProvider';

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
  const [theme, toggleTheme] = useTheme();
  const queryClient = new QueryClient({
    defaultOptions,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Container toggleTheme={toggleTheme}>
          <Header />
          <Controller />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
