import { useQuery } from 'vue-query';
import popupAPI from '@/apis/popupAPI';

const usePopupSearch = (keyword, options = {}) => {
  return useQuery(['POPUP_SEARCH', keyword.value], () => popupAPI.search(keyword.value), {
    ...options,
    select: (data) => data.data.object,
  });
};

export default usePopupSearch;
