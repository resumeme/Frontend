import { useSuspenseQuery } from '@tanstack/react-query';
import { GetMentorDetail, getMentorDetail } from '~/api/user/getMentorDetail';

export const useGetMentorDetail = ({ mentorId }: GetMentorDetail) => {
  return useSuspenseQuery({
    queryKey: ['getMentorDetail'],
    queryFn: () => getMentorDetail({ mentorId }),
  });
};
