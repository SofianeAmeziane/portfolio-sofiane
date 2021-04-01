import axios from 'axios';

export function createPortfolioAction(data) {
  return axios.post('/api/V1/portfolios', data);
}