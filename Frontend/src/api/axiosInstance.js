

import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Your API base URL
  // Other configurations like headers, timeout, interceptors, etc.
});

export const userRequest = axios.create({
  baseURL:axiosInstance,
  hearder:{token:"Bearer"}
})


