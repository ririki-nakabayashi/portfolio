import axios from 'axios';

const MIX_CMS_API_KEY = 'bfd357b4-3813-4d13-8602-1947f8ca45a1';
const MIX_CMS_API_BASE_URL = 'https://force-portfolio.microcms.io/api/v1/';

export const getCMSData = async (param) => {
  delete axios.defaults.headers.common['X-Requested-With'];
  const res = await axios.get(`${MIX_CMS_API_BASE_URL}${param}`, {
    headers: { 'X-API-KEY': MIX_CMS_API_KEY },
  });
  return res;
};

export const postCMSData = async (param) => {
  delete axios.defaults.headers.common['X-Requested-With'];
  const res = await axios.get(`${MIX_CMS_API_BASE_URL}${param}`, {
    headers: { 'X-API-KEY': MIX_CMS_API_KEY },
  });
  return res;
};
