import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from '../src/router/Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
// import { theme } from 'styles/theme';
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider> */}
        <GlobalStyle />
        <Router />
      {/* </ThemeProvider> */}
    </QueryClientProvider>
  );
};
export default App;
