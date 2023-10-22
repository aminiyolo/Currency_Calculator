import { Global, ThemeProvider as Provider } from '@emotion/react';
import { ReactNode } from 'react';

import GlobalStyle from '../../GlobalStyle';
import mode from './style';

interface ThemeProviderProps {
  theme: 'light' | 'dark';
  children: ReactNode;
}

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const THEME = mode[theme];
  return (
    <Provider theme={THEME}>
      <Global styles={GlobalStyle(THEME)} />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
