import { instance } from '@/config/api';

const popupAPI = {
  list: () => instance.get('/popup'),
};

export default popupAPI;
