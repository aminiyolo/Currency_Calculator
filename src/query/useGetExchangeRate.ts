import getExchangeRate, { ExchangeRateApiParams } from '@/api/getExchangeRate';
import { useQuery } from '@tanstack/react-query';

const useGetExchangeRate = ({ base, target }: ExchangeRateApiParams) => {
  return useQuery(['getExchangeRate', base, target], () =>
    getExchangeRate({ base, target }),
  );
};

export default useGetExchangeRate;
