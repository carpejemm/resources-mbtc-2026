// axios interceptors to handle global request/response logic, e.g. error handling, auth tokens, etc.
import axios from 'axios';

// Why create()?
// - allows us to create a pre-configured instance of axios with default settings (baseURL, headers, etc.)
const axiosClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 10000, // this is 10 seconds
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  config => {
    // You can modify the request config here, e.g. add auth tokens
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

export default axiosClient;