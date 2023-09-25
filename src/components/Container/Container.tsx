import { ReactNode } from 'react';
import { Box } from './style';

interface Props {
  children: ReactNode;
}

function Container({ children }: Props) {
  return <Box>{children}</Box>;
}

export default Container;
