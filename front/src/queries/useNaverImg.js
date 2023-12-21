import { useQuery } from 'vue-query';
import naverSearchAPI from '@/apis/naverSearchAPI';

const useNaverImg = (keyword, options = {}) => {
  return useQuery(
    ['NAVER_IMAGE', keyword],
    () => naverSearchAPI.image(keyword),
    {
      ...options,
      select: (data) => data.data,
    }
  );
};

export default useNaverImg;
