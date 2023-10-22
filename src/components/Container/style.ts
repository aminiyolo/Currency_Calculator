import styled from '@emotion/styled';

const Box = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 8vh auto;
  width: 500px;
  height: 650px;
  border-radius: 15px;
`;

const ThemeButton = styled.button`
  position: fixed;
  right: 3rem;
  top: 6rem;
  border-radius: 24px;
  padding: 10px 16px;
  cursor: pointer;
  outline: none;
  border: 1px solid lightgray;
`;

export { Box, ThemeButton };
