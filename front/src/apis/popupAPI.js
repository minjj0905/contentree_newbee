import { instance } from '@/config/api';

const popupAPI = {
  list: () => instance.get('/popup'),
  search: (keyword) => instance.get(`/popup/search?keyword=${keyword}`),
  get: (name) => instance.get(`/popup/${name}`),
};

export default popupAPI;
