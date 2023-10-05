import { Dispatch, useState } from 'react';
import AsyncBoundary from '../AsyncBoundary';
import Content from '../Content';
import ContentLoader from '../Content/ContentLoader';
import RejectedFallback from '../RejectedFallback/RejectedFallback';

export interface CurrencyProps {
  baseCurrency: string | null;
  targetCurrency: string | null;
  baseAmount: number;
  targetAmount: number;
  setBaseCurrency: Dispatch<React.SetStateAction<string | null>>;
  setTargetCurrency: Dispatch<React.SetStateAction<string | null>>;
  setBaseAmount: Dispatch<React.SetStateAction<number>>;
  setTargetAmount: Dispatch<React.SetStateAction<number>>;
}

function Controller() {
  const [baseCurrency, setBaseCurrency] = useState<string | null>(null);
  const [targetCurrency, setTargetCurrency] = useState<string | null>(null);
  const [baseAmount, setBaseAmount] = useState<number>(0);
  const [targetAmount, setTargetAmount] = useState<number>(0);

  const props = {
    baseCurrency,
    targetCurrency,
    baseAmount,
    targetAmount,
    setBaseCurrency,
    setTargetCurrency,
    setBaseAmount,
    setTargetAmount,
  };

  return (
    <AsyncBoundary
      pendingFallback={<ContentLoader {...props} />}
      rejectedFallback={<RejectedFallback />}
    >
      <Content {...props} />
    </AsyncBoundary>
  );
}

export default Controller;
