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

const App = () => {
  const queryClient = new QueryClient();
  return (
    /*연동 확인 테스트용 주석 */
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
