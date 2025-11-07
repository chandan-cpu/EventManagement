import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // Make sure this matches your backend port
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

export default api;
