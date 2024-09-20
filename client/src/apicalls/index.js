import axios from 'axios';

// Create an axios instance with baseURL and authorization headers
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://finalquiz-cnog.vercel.app/', // Use the backend URL from the environment variable
    headers: {
        Authorization: localStorage.getItem('token')
            ? `Bearer ${localStorage.getItem('token')}`
            : '', // Set the token if it exists, otherwise set an empty string
    },
    timeout: 10000, // Optional: Set a timeout for requests (e.g., 10 seconds)
});

export default axiosInstance;
