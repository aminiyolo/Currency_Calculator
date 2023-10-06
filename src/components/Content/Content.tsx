import { ChangeEvent, MouseEvent, useCallback, useEffect } from 'react';
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
  baseAmount,
  targetAmount,
  setBaseCurrency,
  setTargetCurrency,
  setBaseAmount,
  setTargetAmount,
}: Props) {
  const { data: country } = useGetIPCountry();
  const { data: currencyList } = useGetCurrencyList();
  const { data: rate } = useGetExchangeRate({ baseCurrency, targetCurrency });

  // 접속한 IP 주소의 country 값을 가져와 통화 목록에서 앞 두글자와 같은 통화코드를 가져옴
  // ex) IpCountry: KR, Currency: KRW
  const initialCurrency =
    currencyList?.find((currency) => currency.substring(0, 2) === country) ??
    'USD';

  // 통화 숫자 금액 변경
  const handleChangeCurrency = useCallback(
    (e: ChangeEvent<HTMLInputElement>, type: CurrencyType) => {
      const value = Number(e.target.value.replace(/[^0-9]/g, ''));
      // 값을 지우면 최소 값 0이 value 값으로 들어오므로, 두개의 통화 금액 모두 0으로 초기화
      if (value === 0) {
        setBaseAmount(0);
        setTargetAmount(0);
        return;
      }

      if (rate) {
        // 환율 값이 있다면, 작성하고 있는 Input에 따라 선택된 환율 값 적용
        if (type === 'base') {
          setBaseAmount(value);
          setTargetAmount(Number((rate * value).toFixed(2)));
        } else {
          setTargetAmount(value);
          setBaseAmount(Number((value / rate).toFixed(2)));
        }
      } else type === 'base' && setBaseAmount(value);
    },
    [rate, setBaseAmount, setTargetAmount],
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
    setTargetCurrency(baseCurrency);
  }, [baseCurrency, targetCurrency, setBaseCurrency, setTargetCurrency]);

  useMount(() => {
    // 접속한 IP 주소 나라의 통화를 기본 값으로 세팅
    setBaseCurrency(initialCurrency);
  });

  useEffect(() => {
    if (!rate) return;
    // 변환하고자 하는 통화 환율로 환산
    setTargetAmount(Number((rate * baseAmount).toFixed(2)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rate]);

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
