import axios from 'axios';

export interface ExchangeRateApiParams {
  baseCurrency: string | null;
  targetCurrency: string | null;
}

interface ExchangeRateResponse {
  base_code: string;
  conversion_rate: number;
  documentation: string;
  result: string;
  target_code: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
}

const API_KEY = process.env.REACT_APP_EXCHANGE_RATE_KEY;

const getExchangeRate = async ({
  baseCurrency,
  targetCurrency,
}: ExchangeRateApiParams) => {
  const response = await axios.get<ExchangeRateResponse>(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${baseCurrency}/${targetCurrency}`,
  );

  return response.data;
};

export default getExchangeRate;
