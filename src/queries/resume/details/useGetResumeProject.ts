import { useQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeProject, getResumeProject } from '~/api/resume/details/getResumeProject';

export const useGetResumeProject = ({ resumeId }: GetResumeProject) => {
  return useQuery({
    queryKey: categoryKeys.project,
    queryFn: () => getResumeProject({ resumeId }),
    enabled: !!resumeId,
  });
};
