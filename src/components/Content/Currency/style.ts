import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Li = styled.li`
  list-style: none;
  background-color: #fff;
  padding: 5px 7px;
  text-align: center;

  &:hover {
    background-color: #0a507a;
    color: whitesmoke;
  }
`;

const ulStyle = css`
  position: absolute;
  padding: 0;
  height: 195px !important;
  overflow-y: auto;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0px lightgray;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.39) !important;
    border-radius: 3px;
  }
`;

export { ulStyle, Li };
