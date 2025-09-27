import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Recommendations } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getRecommendations = (): Promise<Recommendations[]> => {
  return api.get('/api/recommendations');
};

export const getRecommendationsOptions = () => {
  return queryOptions({
    queryKey: ['Recommendations'],
    queryFn: () => getRecommendations(),
  });
};

type UseRecommendationsOptions = {
  queryConfig?: QueryConfig<typeof getRecommendationsOptions>;
};

export const useRecommendations = ({
  queryConfig = {},
}: UseRecommendationsOptions = {}) => {
  return useQuery({
    ...getRecommendationsOptions(),
    ...queryConfig,
  });
};
