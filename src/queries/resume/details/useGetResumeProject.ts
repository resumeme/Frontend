import { useQuery } from '@tanstack/react-query';
import { GetResumeProject, getResumeProject } from '~/api/resume/details/getResumeProject';

export const useGetResumeProject = ({ resumeId }: GetResumeProject) => {
  return useQuery({
    queryKey: ['getResumeProject'],
    queryFn: () => getResumeProject({ resumeId }),
    enabled: !!resumeId,
  });
};
