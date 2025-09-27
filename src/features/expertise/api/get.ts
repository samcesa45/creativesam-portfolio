import { queryOptions, useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import { Expertise } from '@/types/api';
import { QueryConfig } from '@/lib/react-query';

export const getExpertise = (): Promise<Expertise[]> => {
  return api.get('/api/expertise');
};

export const getExpertiseQueryOptions = () => {
  return queryOptions({
    queryKey: ['Expertise'],
    queryFn: () => getExpertise(),
  });
};

type UseExpertiseOptions = {
  queryConfig?: QueryConfig<typeof getExpertiseQueryOptions>;
};

export const useExpertise = ({
  queryConfig = {},
}: UseExpertiseOptions = {}) => {
  return useQuery({
    ...getExpertiseQueryOptions(),
    ...queryConfig,
  });
};
