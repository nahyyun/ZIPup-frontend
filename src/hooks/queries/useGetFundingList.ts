import { InstanceWithToken } from '@api/index';
import { useQuery } from '@tanstack/react-query';
import { FundingInfo } from '@typings/funding';

interface FundListProps {
  uuid: string;
}

const useGetMyFundingList = ({ uuid }: FundListProps) => {
  return useQuery<FundingInfo[]>({
    enabled: !!uuid,
    refetchOnWindowFocus: false,
    queryKey: ['get-my-funding-list', uuid],
    queryFn: async () => {
      const response = await InstanceWithToken.get(`/v1/fund/list`, {
        params: {
          user: uuid,
        },
      });

      return response.data;
    },
  });
};

const useGetParticipatedList = ({ uuid }: FundListProps) => {
  return useQuery<FundingInfo[]>({
    enabled: !!uuid,
    refetchOnWindowFocus: false,
    queryKey: ['get-participated-funding-list', uuid],
    queryFn: async () => {
      try {
        const response = await InstanceWithToken.get(`/v1/present/list`, {
          params: {
            user: uuid,
          },
        });

        return response.data;
      } catch (error) {
        throw new Error(`${error}`);
      }
    },
  });
};

export { useGetMyFundingList, useGetParticipatedList };
