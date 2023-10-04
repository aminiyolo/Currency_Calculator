import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  size: number;
  color?: string;
}

function Spinner({ size = 11, color }: Partial<Props>) {
  return <Circle size={size} color={color} />;
}

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
  `;

const Circle = styled.div<Props>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: ${({ size }) => `${size / 6}px`} solid
    ${({ color }) => (color ? color : 'grey')};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 0.75s linear infinite;
  position: absolute;
  top: ${({ size }) => `calc(50% - ${size / 1.5}px)`};
  left: ${({ size }) => `calc(50% - ${size / 1.5}px)`};
`;

export default Spinner;
