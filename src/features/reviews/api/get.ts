import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Reviews } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getReviews = (): Promise<Reviews[]> => {
  return api.get('/api/reviews');
};

export const getReviewsQueryOptions = () => {
  return queryOptions({
    queryKey: ['reviews'],
    queryFn: () => getReviews(),
  });
};

type UseReviewsOptions = {
  queryConfig?: QueryConfig<typeof getReviewsQueryOptions>;
};

export const useReviews = ({ queryConfig = {} }: UseReviewsOptions = {}) => {
  return useQuery({
    ...getReviewsQueryOptions(),
    ...queryConfig,
  });
};
