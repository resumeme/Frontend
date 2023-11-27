import { useSuspenseQuery } from '@tanstack/react-query';
import { followKeys } from '../followKeys.const';
import { getMentorFollow } from '~/api/follow/details/getMentorFollow';

export const useGetMentorFollow = () => {
  return useSuspenseQuery({
    queryKey: followKeys.all,
    queryFn: getMentorFollow,
  });
};
