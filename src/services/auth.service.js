import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API_URL = 'https://cleanup-312620-ve6aqjr5zq-ue.a.run.app/api/user/';
let decoded = {};

const register = (email, password) => {
  return axios.post(`${API_URL}register`, {
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(`${API_URL}login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        decoded = jwtDecode(response.data.token);
        console.log(decoded);
        const userdata = {
          token: response.data.token,
          id: decoded.id,
          email: decoded.email,
        };
        localStorage.setItem('user', JSON.stringify(userdata));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
