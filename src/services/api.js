import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend123-twl.vercel.app/api', // Ganti dengan URL backend Anda
});

export default api;
