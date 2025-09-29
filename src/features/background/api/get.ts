import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Background } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getBackground = (): Promise<Background[]> => {
  return api.get('/api/background');
};

export const getBackgroundQueryOptions = () => {
  return queryOptions({
    queryKey: ['Background'],
    queryFn: () => getBackground(),
  });
};

type UseBackgroundOptions = {
  queryConfig?: QueryConfig<typeof getBackgroundQueryOptions>;
};

export const useBackground = ({
  queryConfig = {},
}: UseBackgroundOptions = {}) => {
  return useQuery({
    ...getBackgroundQueryOptions(),
    ...queryConfig,
  });
};
