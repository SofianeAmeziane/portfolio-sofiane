import axios from 'axios';

class PortfolioApi {
  constructor() {
    this.apiurl=process.env.PORTFOLIO_API_URL
  }

  getAll() {
    return axios.get(this.apiurl)
  }
  getById(id) {
    return axios.get(`${this.apiurl}/${id}`)
  }
  createPortfolio(data) {
    return axios.post(this.apiurl, data);
  }
}

export default PortfolioApi;