import { useQuery } from '@tanstack/react-query';
import { resumeDetailKeys } from './resumeDetailKeys.const';
import {
  GetResumeReferenceLinks,
  getResumeReferenceLinks,
} from '~/api/resume/details/getResumeReferenceLinks';

export const useGetResumeReferenceLinks = ({ resumeId }: GetResumeReferenceLinks) => {
  return useQuery({
    queryKey: resumeDetailKeys.referenceLinks(resumeId),
    queryFn: () => getResumeReferenceLinks({ resumeId }),
    enabled: !!resumeId,
  });
};
