import { Global, ThemeProvider as Provider } from '@emotion/react';
import { ReactNode } from 'react';

import GlobalStyle from '../../GlobalStyle';
import mode from './style';

interface ThemeProviderProps {
  theme: 'light' | 'dark';
  children: ReactNode;
}

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <Provider theme={mode[theme]}>
      <Global styles={GlobalStyle(mode[theme])} />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
