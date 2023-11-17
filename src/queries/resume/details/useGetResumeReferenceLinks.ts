import { useQuery } from '@tanstack/react-query';
import {
  GetResumeReferenceLinks,
  getResumeReferenceLinks,
} from '~/api/resume/details/getResumeReferenceLinks';

export const useGetResumeReferenceLinks = ({ resumeId }: GetResumeReferenceLinks) => {
  return useQuery({
    queryKey: ['getResumeReferenceLinks'],
    queryFn: () => getResumeReferenceLinks({ resumeId }),
    enabled: !!resumeId,
  });
};
