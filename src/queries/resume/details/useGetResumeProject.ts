import { useSuspenseQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeProject, getResumeProject } from '~/api/resume/details/getResumeProject';

export const useGetResumeProject = ({ resumeId }: GetResumeProject) => {
  return useSuspenseQuery({
    queryKey: categoryKeys.project(resumeId),
    queryFn: () => getResumeProject({ resumeId }),
  });
};
