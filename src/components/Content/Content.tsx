import { ChangeEvent, MouseEvent, useCallback, useMemo, useState } from 'react';

import Currency from './Currency';
import SwapController from './SwapController';
import { Container } from './style';
import useGetCurrencyList from '@/query/useGetCurrencyList';
import useGetIPCountry from '@/query/useGetIPCountry';
import useGetExchangeRate from '@/query/useGetExchangeRate';
import useMount from '@/hook/useMount';
import { CurrencyProps } from '../Controller/Controller';

export type CurrencyType = 'base' | 'target';

interface Props extends CurrencyProps {}

function Content({
  baseCurrency,
  targetCurrency,
  setBaseCurrency,
  setTargetCurrency,
}: Props) {
  const [baseAmount, setBaseAmount] = useState<number>(0);
  const [targetAmount, setTargetAmount] = useState<number>(0);

  const { data: country } = useGetIPCountry();
  const { data: currencyList } = useGetCurrencyList();
  const { data: rate } = useGetExchangeRate({ baseCurrency, targetCurrency });

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
      type === 'base' ? setBaseAmount(value) : setTargetAmount(value);
    },
    [],
  );

  // 통화 단위 변경
  const handleSelect = useCallback(
    (e: MouseEvent<HTMLUListElement>, type: CurrencyType) => {
      const newSelected = (e.target as HTMLUListElement).innerHTML;
      type === 'base'
        ? setBaseCurrency(newSelected)
        : setTargetCurrency(newSelected);
    },
    [setBaseCurrency, setTargetCurrency],
  );

  // 베이스 통화와 변경하고자 하는 통화 단위 서로 위치 변경
  const handleSwap = useCallback(() => {
    // base 통화와 target 통화 변경
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency || initialCurrency);
  }, [
    baseCurrency,
    targetCurrency,
    initialCurrency,
    setBaseCurrency,
    setTargetCurrency,
  ]);

  useMount(() => {
    setBaseCurrency(initialCurrency);
  });

  if (!currencyList) return null;
  return (
    <Container>
      <Currency
        type='base'
        notAllowed={targetCurrency}
        list={currencyList}
        amount={baseAmount}
        selected={baseCurrency}
        handleChange={handleChangeCurrency}
        handleSelect={handleSelect}
      />
      <SwapController
        rate={rate}
        baseCurrency={baseCurrency}
        targetCurrency={targetCurrency}
        handleSwap={handleSwap}
      />
      <Currency
        type='target'
        notAllowed={baseCurrency}
        list={currencyList}
        amount={targetAmount}
        selected={targetCurrency}
        handleChange={handleChangeCurrency}
        handleSelect={handleSelect}
      />
    </Container>
  );
}

export default Content;
