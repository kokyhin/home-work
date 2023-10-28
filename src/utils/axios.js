import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 404) {
      window.location.href = '/404';
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
