import { useQuery } from 'vue-query';
import popupAPI from '@/apis/popupAPI';

const usePopup = (name, options = {}) => {
  return useQuery(['POPUP', name], () => popupAPI.get(name), {
    ...options,
    select: (data) => data.data.object,
  });
};

export default usePopup;
