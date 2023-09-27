import axios from 'axios';

interface CurrencyListResponse {
  base_code: string;
  conversion_rates: Array<{ string: number }>;
  documentation: string;
  result: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
}

const API_KEY = process.env.REACT_APP_EXCHANGE_RATE_KEY;

const getCurrencyList = async () => {
  const response = await axios.get<CurrencyListResponse>(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/KRW`,
  );

  return response.data;
};

export default getCurrencyList;
