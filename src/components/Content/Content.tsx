import { ChangeEvent, MouseEvent, useCallback, useMemo, useState } from 'react';

import Currency from './Currency';
import SwapController from './SwapController';
import { Container } from './style';
import useGetCurrencyList from '@/query/useGetCurrencyList';
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
  const initialCurrency = useMemo(
    () =>
      currencyList?.find((currency) => currency.substring(0, 2) === country) ??
      'USD',
    [country, currencyList],
  );

  // 통화 숫자 금액 변경
  const handleChangeCurrency = useCallback(
    (e: ChangeEvent<HTMLInputElement>, type: CurrencyType) => {
      const value = Number(e.target.value.replace(/[^0-9]/g, ''));
      type === 'base' ? setBaseCurrency(value) : setTargetCurrency(value);
    },
    [],
  );

  // 통화 단위 변경
  const handleSelect = useCallback(
    (e: MouseEvent<HTMLUListElement>, type: CurrencyType) => {
      const newSelected = (e.target as HTMLUListElement).innerHTML;
      type === 'base' ? setBase(newSelected) : setTarget(newSelected);
    },
    [],
  );

  // 베이스 통화와 변경하고자 하는 통화 단위 서로 위치 변경
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
        notAllowed={target}
        list={currencyList}
        amount={baseCurrency}
        selected={base || initialCurrency}
        handleChange={handleChangeCurrency}
        handleSelect={handleSelect}
      />
      <SwapController handleSwap={handleSwap} />
      <Currency
        type='target'
        notAllowed={base || initialCurrency}
        list={currencyList}
        amount={targetCurrency}
        selected={target}
        handleChange={handleChangeCurrency}
        handleSelect={handleSelect}
      />
    </Container>
  );
}

export default Content;
