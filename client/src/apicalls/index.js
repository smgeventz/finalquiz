import axios from 'axios';

// Create an axios instance with the base URL pointing to your backend
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', // Fallback to localhost:5000 during development
  headers: {
    Authorization: localStorage.getItem('token')
      ? `Bearer ${localStorage.getItem('token')}`
      : '', // Set the token if it exists
  },
});

export default axiosInstance;
