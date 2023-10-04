import getExchangeRate, { ExchangeRateApiParams } from '@/api/getExchangeRate';
import { useQuery } from '@tanstack/react-query';

const useGetExchangeRate = ({
  baseCurrency,
  targetCurrency,
}: ExchangeRateApiParams) => {
  return useQuery(
    ['getExchangeRate', baseCurrency, targetCurrency],
    () => getExchangeRate({ baseCurrency, targetCurrency }),
    {
      enabled: !!baseCurrency && !!targetCurrency,
      select: (data) => data.conversion_rate,
    },
  );
};

export default useGetExchangeRate;
