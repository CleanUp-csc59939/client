import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

// To grab data from the backend, but backend needs to be reconfigured to have the /login return user id in the JSON

const getUserBoard = () => {
  return axios.get(`${API_URL}user`, { headers: authHeader() });
};

export default {
  getUserBoard,
};
