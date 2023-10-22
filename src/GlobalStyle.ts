import { css } from '@emotion/react';
import { ThemeColor } from './components/ThemeProvider/style';

const GlobalStyle = (theme: ThemeColor) => css`
  body {
    background-color: #0a507a;
    overflow-y: hidden;
    user-select: none;
  }

  .header {
    color: ${theme.fontColor};

    p {
      color: ${theme.fontColor === '#000' && 'grey'};
    }
  }

  .box {
    background-color: ${theme.bgColor};
  }
`;

export default GlobalStyle;
