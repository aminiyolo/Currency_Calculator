import Currency from './Currency';
import SwapController from './SwapController';

function Content() {
  return (
    <div>
      <Currency data-id='base_currency' />
      <SwapController />
      <Currency data-id='target_currency' />
    </div>
  );
}

export default Content;
