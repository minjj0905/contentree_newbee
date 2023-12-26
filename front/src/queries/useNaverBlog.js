import { useQuery } from 'vue-query';
import naverSearchAPI from '@/apis/naverSearchAPI';

const useNaverBlog = (keyword, options = {}) => {
  return useQuery(
    ['NAVER_BLOG', keyword],
    () => naverSearchAPI.blog(keyword),
    {
      ...options,
      select: (data) => data.data,
    }
  );
};

export default useNaverBlog;
