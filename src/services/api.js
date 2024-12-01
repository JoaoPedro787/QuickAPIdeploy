import axios from 'axios';

const api = axios.create({
  baseURL: 'https://quick-api-tau.vercel.app/'
});

export default api;
