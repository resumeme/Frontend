import { useQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeLanguage, getResumeLanguage } from '~/api/resume/details/getResumeLanguage';

export const useGetResumeLanguage = ({ resumeId }: GetResumeLanguage) => {
  return useQuery({
    queryKey: categoryKeys.language(resumeId),
    queryFn: () => getResumeLanguage({ resumeId }),
    enabled: !!resumeId,
  });
};
