import { Box } from './style';

interface Props {
  children: JSX.Element;
}

function Container({ children }: Props) {
  return <Box>{children}</Box>;
}

export default Container;
