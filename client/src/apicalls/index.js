import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://finalquiz-cnog.vercel.app/', // Use an environment variable or fallback to '/api'
});

export default axiosInstance;
