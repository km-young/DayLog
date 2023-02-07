import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from '../src/router/Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
// import { theme } from 'styles/theme';
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider> */}
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
      {/* </ThemeProvider> */}
    </QueryClientProvider>
  );
};
export default App;
