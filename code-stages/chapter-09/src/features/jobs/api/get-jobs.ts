import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

import { Job } from '../types';

type GetJobsOptions = {
  params: {
    organizationId: string | undefined;
  };
};

export const getJobs = ({
  params,
}: GetJobsOptions): Promise<Job[]> => {
  return apiClient.get('/jobs', {
    params,
  });
};

export const useJobs = ({ params }: GetJobsOptions) => {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ['jobs', params],
    queryFn: () => getJobs({ params }),
    enabled: !!params.organizationId,
    initialData: [],
  });

  return {
    data,
    isLoading: isFetching && !isFetched,
  };
};
