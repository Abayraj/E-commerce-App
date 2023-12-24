

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5000', // Your API base URL
  // Other configurations like headers, timeout, interceptors, etc.
});

export default axiosInstance;