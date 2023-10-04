import Spinner from '@/components/Spinner';
import cn from 'classnames';
import { Container } from './style';

interface Props {
  rate?: number;
  baseCurrency?: string | null;
  targetCurrency?: string | null;
  loading?: boolean;
  handleSwap: () => void;
}

function SwapController({
  rate,
  baseCurrency,
  targetCurrency,
  handleSwap,
  loading = false,
}: Props) {
  return (
    <Container>
      <button
        disabled={loading}
        onClick={handleSwap}
        className={cn('swap', { disabled: loading })}
      >
        SWAP
      </button>
      <div className='rate_info'>
        {loading && (
          <div className='spinner_wrapper'>
            <Spinner />
          </div>
        )}
        {!loading && rate && `1 ${baseCurrency} = ${rate} ${targetCurrency}`}
      </div>
    </Container>
  );
}

export default SwapController;
