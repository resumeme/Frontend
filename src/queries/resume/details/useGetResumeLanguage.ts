import { useQuery } from '@tanstack/react-query';
import { GetResumeLanguage, getResumeLanguage } from '~/api/resume/details/getResumeLanguage';

export const useGetResumeLanguage = ({ resumeId }: GetResumeLanguage) => {
  return useQuery({
    queryKey: ['getResumeLanguage'],
    queryFn: () => getResumeLanguage({ resumeId }),
    enabled: !!resumeId,
  });
};
