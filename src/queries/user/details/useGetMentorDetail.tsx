import { useSuspenseQuery } from '@tanstack/react-query';
import { GetMentorDetail, getMentorDetail } from '~/api/user/getMentorDetail';

export const useGetMentorDetail = ({ mentorId }: GetMentorDetail) => {
  return useSuspenseQuery({
    queryKey: ['getMentorDetail', String(mentorId)],
    queryFn: () => getMentorDetail({ mentorId }),
  });
};
