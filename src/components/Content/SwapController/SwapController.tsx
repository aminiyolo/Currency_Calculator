import { Container } from './style';

function SwapController() {
  return (
    <Container>
      <button className='swap'>SWAP</button>
      <div className='rate_info'>1USD = 0.800KRW</div>
    </Container>
  );
}

export default SwapController;
