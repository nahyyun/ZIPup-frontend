import { InstanceWithToken } from '@api/index';
import { useQuery } from '@tanstack/react-query';
import { FundingInfo } from '@typings/funding';

interface FundListProps {
  types: string;
}

const useFundingList = ({ types }: FundListProps) => {
  return useQuery<FundingInfo[]>({
    enabled: !!types,
    refetchOnWindowFocus: false,
    queryKey: [types],
    queryFn: async () => {
      let url = '';
      if (types === 'my') {
        url = '/v1/fund/list';
      } else if (types === 'participated') {
        url = '/v1/present/list';
      } else if (types === 'trending') {
        url = '/v1/fund/popular';
      }

      try {
        const response = await InstanceWithToken.get(url);

        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
};

export { useFundingList };