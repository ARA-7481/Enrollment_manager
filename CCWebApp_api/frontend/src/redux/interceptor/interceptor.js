import axios from 'axios';

const instanceAxios = axios.create({
  // baseURL: 'https://ccwebapp-api.onrender.com',
  baseURL: 'http://localhost:8000',
 });


instanceAxios.interceptors.request.use(
  config => {
    const access = localStorage.getItem('access');
    if (access) {
      config.headers['Authorization'] = `Bearer ${access}`;
    }
    return config;
  },
  error => Promise.reject(error)
);


instanceAxios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await instanceAxios.post('/api/token/refresh/');
        localStorage.setItem('access', res.data.access);

        originalRequest.headers['Authorization'] = `Bearer ${res.data.access}`;

        return instanceAxios(originalRequest);
      } catch (err) {
        console.error(err);
        localStorage.removeItem('access');
      }
    }
    return Promise.reject(error);
  }
);

export default instanceAxios;
