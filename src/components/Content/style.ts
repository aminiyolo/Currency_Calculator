import styled from 'styled-components';

const Container = styled.div`
  width: 350px;
  height: 150px;
`;

const CurrencyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
`;

const Select = styled.div`
  width: 50px;
  display: flex;
  cursor: pointer;

  .code_name {
    line-height: -3px;
  }

  .arrow {
    transform: rotate(0deg);
    transition: all 200ms ease-in;
  }

  .arrow.open {
    transform: rotate(180deg);
  }
`;

const Input = styled.input`
  font-size: 16px;
  width: 130px;
  background-color: transparent;
  border: none;
  outline: none;
  text-align: right;
`;

const SwapController = styled.div``;

export { Container, CurrencyContainer, Select, Input, SwapController };
