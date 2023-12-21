import axios from 'axios';

const createInstance = () => {
  return axios.create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'X-Naver-Client-Id': import.meta.env.VITE_NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': import.meta.env.VITE_NAVER_CLIENT_SECRET,
    },
  });
};

const instance = createInstance();

const naverSearchAPI = {
  blog: (query) => instance.get(`/v1/search/blog.json?query=${query}`),
};

export default naverSearchAPI;
