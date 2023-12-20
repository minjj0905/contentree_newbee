import axios from 'axios';

const createInstance = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const instance = createInstance();
