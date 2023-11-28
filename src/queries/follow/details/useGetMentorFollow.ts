import { useSuspenseQuery } from '@tanstack/react-query';
import { followKeys } from '../followKeys.const';
import { getMentorFollow } from '~/api/follow/details/getMentorFollow';

export const useGetMentorFollow = ({ mentorId }: { mentorId: number }) => {
  return useSuspenseQuery({
    queryKey: followKeys.all,
    queryFn: () => getMentorFollow({ mentorId }),
  });
};
