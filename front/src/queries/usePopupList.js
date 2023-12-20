import { useQuery } from 'vue-query';
import popupAPI from '@/apis/popupAPI';

const usePopupList = (options = {}) => {
  return useQuery(['POPUP_LIST'], () => popupAPI.list(), {
    ...options,
    select: (data) => data.data.object,
  });
};

export default usePopupList;
