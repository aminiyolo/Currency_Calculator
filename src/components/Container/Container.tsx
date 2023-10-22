import { ReactNode } from 'react';
import { Box, ThemeButton } from './style';

interface Props {
  children: ReactNode;
  toggleTheme: () => void;
}

function Container({ children, toggleTheme }: Props) {
  return (
    <Box className='box'>
      <ThemeButton onClick={toggleTheme}>change theme</ThemeButton>
      {children}
    </Box>
  );
}

export default Container;
