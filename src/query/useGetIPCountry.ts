import { useQuery } from '@tanstack/react-query';
import getIPCountry from '@/api/getIPCountry';

const useGetIPCountry = () => {
  // 접속한 IP에 관한 나라 정보가 변경될 일이 없기 때문에 재호출 막기 위하여 키값 고정
  return useQuery(['getIPCountry'], () => getIPCountry(), {
    select: (data) => data.country,
  });
};

export default useGetIPCountry;
