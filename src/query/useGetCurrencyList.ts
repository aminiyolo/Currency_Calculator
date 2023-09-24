import { useQuery } from '@tanstack/react-query';
import getCurrencyList from '@/api/getCurrencyList';

const useGetCurrencyList = () => {
  // 통화 목록은 고정 값이므로, 재호출 하지 않도록 키값도 고정
  return useQuery(['getCurrencyList'], () => getCurrencyList());
};

export default useGetCurrencyList;
