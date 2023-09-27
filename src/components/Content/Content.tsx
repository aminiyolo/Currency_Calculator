import Currency from './Currency';
import SwapController from './SwapController';
import { Container } from './style';
import useGetCurrencyList from '@/query/useGetCurrencyList';
import { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react';
import useGetIPCountry from '@/query/useGetIPCountry';

export type CurrencyType = 'base' | 'target';

function Content() {
  const [baseCurrency, setBaseCurrency] = useState<number>(0);
  const [targetCurrency, setTargetCurrency] = useState<number>(0);
  const [base, setBase] = useState<string | null>(null);
  const [target, setTarget] = useState<string | null>(null);

  const { data: country } = useGetIPCountry();
  const { data: currencyList } = useGetCurrencyList();

  // 접속한 IP 주소의 country 값을 가져와 통화 목록에서 앞 두글자와 같은 통화코드를 가져옴
  // ex) IpCountry: KR, Currency: KRW
  const initialCurrency =
    currencyList?.find((currency) => currency.substring(0, 2) === country) ??
    'USD';

  const handleChangeCurrency = useCallback(
    (e: ChangeEvent<HTMLInputElement>, type: CurrencyType) => {
      const value = Number(e.target.value.replace(/[^0-9]/g, ''));
      type === 'base' ? setBaseCurrency(value) : setTargetCurrency(value);
    },
    [],
  );

  const handleSwap = useCallback(() => {
    // base 통화와 target 통화 변경
    setBase(target);
    setTarget(base || initialCurrency);
  }, [base, initialCurrency, target]);

  if (!currencyList) return null;
  return (
    <Container>
      <Currency
        type='base'
        list={currencyList}
        selected={base || initialCurrency}
        amount={baseCurrency}
        handleChange={handleChangeCurrency}
      />
      <SwapController />
      <Currency
        type='target'
        list={currencyList}
        selected={target}
        amount={targetCurrency}
        handleChange={handleChangeCurrency}
      />
    </Container>
  );
}

export default Content;
