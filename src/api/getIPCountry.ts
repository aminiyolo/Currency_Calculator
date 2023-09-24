import axios from 'axios';

interface IpCountryResponse {
  city: string;
  country: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
  timezone: string;
}

const API_KEY = process.env.REACT_APP_IPINFO_KEY;

const getIPCountry = async () => {
  const response = await axios.get<IpCountryResponse>(
    `https://ipinfo.io?token=${API_KEY}`,
  );
  return response.data;
};

export default getIPCountry;
