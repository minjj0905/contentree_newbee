import { useQuery } from 'vue-query';
import popupAPI from '@/apis/popupAPI';

const usePopupSearch = (keyword, options = {}) => {
  return useQuery(['POPUP_SEARCH', keyword], () => popupAPI.search(keyword), {
    ...options,
    select: (data) => data.data.object,
  });
};

export default usePopupSearch;
