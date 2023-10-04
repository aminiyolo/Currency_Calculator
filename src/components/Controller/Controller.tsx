import { Dispatch, Suspense, useState } from 'react';
import Content from '../Content';
import ContentLoader from '../Content/ContentLoader';

export interface CurrencyProps {
  baseCurrency: string | null;
  targetCurrency: string | null;
  setBaseCurrency: Dispatch<React.SetStateAction<string | null>>;
  setTargetCurrency: Dispatch<React.SetStateAction<string | null>>;
}

function Controller() {
  const [baseCurrency, setBaseCurrency] = useState<string | null>(null);
  const [targetCurrency, setTargetCurrency] = useState<string | null>(null);

  const props = {
    baseCurrency,
    targetCurrency,
    setBaseCurrency,
    setTargetCurrency,
  };

  return (
    <Suspense fallback={<ContentLoader {...props} />}>
      <Content {...props} />
    </Suspense>
  );
}

export default Controller;
