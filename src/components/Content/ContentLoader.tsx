import { Container } from './style';
import Currency from './Currency';
import SwapController from './SwapController';
import { CurrencyProps } from '../Controller/Controller';

function ContentLoader({ baseCurrency, targetCurrency }: CurrencyProps) {
  return (
    <Container>
      <Currency
        type='base'
        notAllowed={''}
        list={[]}
        amount={0}
        loading={true}
        selected={baseCurrency}
        handleChange={() => {}}
        handleSelect={() => {}}
      />
      <SwapController
        loading={true && !!targetCurrency}
        handleSwap={() => {}}
      />
      <Currency
        type='target'
        notAllowed={''}
        list={[]}
        amount={0}
        loading={true}
        selected={targetCurrency}
        handleChange={() => {}}
        handleSelect={() => {}}
      />
    </Container>
  );
}

export default ContentLoader;
