import { useQuery } from '@tanstack/react-query';
import { followKeys } from '../followKeys.const';
import { getMentorFollow } from '~/api/follow/details/getMentorFollow';
import { UserRole } from '~/types/user';

export const useGetMentorFollow = ({ mentorId, role }: { mentorId: number; role?: UserRole }) => {
  return useQuery({
    queryKey: followKeys.all,
    queryFn: () => getMentorFollow({ mentorId }),
    enabled: !!(role === 'mentee'),
  });
};
