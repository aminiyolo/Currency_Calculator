import { Container } from './style';

interface Props {
  handleSwap: () => void;
}

function SwapController({ handleSwap }: Props) {
  return (
    <Container>
      <button onClick={handleSwap} className='swap'>
        SWAP
      </button>
      <div className='rate_info'>1USD = 0.800KRW</div>
    </Container>
  );
}

export default SwapController;
