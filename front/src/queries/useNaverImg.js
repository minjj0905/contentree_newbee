import { useQuery } from 'vue-query';
import naverSearchAPI from '@/apis/naverSearchAPI';

const useNaverImg = (keyword, options = {}) => {
  return useQuery(
    ['NAVER_IMAGE', keyword],
    () => naverSearchAPI.image(keyword),
    {
      ...options,
      staleTime: 1000 * 1000,
      cacheTime: 10000 * 1000,
      select: (data) => data.data,
    }
  );
};

export default useNaverImg;
