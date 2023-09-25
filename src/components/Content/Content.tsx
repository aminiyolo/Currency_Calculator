import Currency from './Currency';
import SwapController from './SwapController';
import { Container } from './style';

function Content() {
  return (
    <Container>
      <Currency data-id='base_currency' />
      <SwapController />
      <Currency data-id='target_currency' />
    </Container>
  );
}

export default Content;
