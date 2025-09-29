import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Portfolio } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getPortfolio = (): Promise<Portfolio[]> => {
  return api.get('/api/portfolio');
};

export const getPortfolioQueryOptions = () => {
  return queryOptions({
    queryKey: ['Portfolio'],
    queryFn: () => getPortfolio(),
  });
};

type UsePortfolioOptions = {
  queryConfig?: QueryConfig<typeof getPortfolioQueryOptions>;
};

export const usePortfolio = ({
  queryConfig = {},
}: UsePortfolioOptions = {}) => {
  return useQuery({
    ...getPortfolioQueryOptions(),
    ...queryConfig,
  });
};
