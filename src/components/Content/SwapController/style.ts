import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17px 15px;

  .swap {
    padding: 5px;
    outline: none;
    border-radius: 7px;
    font-size: 12px;
    color: #fff;
    background-color: #0a507a;
    border: 1px solid #0a507a;
    cursor: pointer;
  }

  .disabled {
    background-color: gray;
    border-color: gray;
    cursor: not-allowed;
  }

  .rate_info {
    font-size: 13px;
    color: gray;
  }

  .spinner_wrapper {
    position: relative;
    top: 10px;
    right: 8px;
  }
`;

export { Container };
