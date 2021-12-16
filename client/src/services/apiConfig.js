import axios from 'axios';


const baseUrl = 'production'
  ? 'https://messageme-api.herokuapp.com/'
  : 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
