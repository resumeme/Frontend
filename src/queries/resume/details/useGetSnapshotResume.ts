import { useSuspenseQuery } from '@tanstack/react-query';
import { getSnapshotResume } from '~/api/resume/details/getSnapshotResume';

export const useGetSnapshotResume = ({ resumeId }: { resumeId: string }) => {
  return useSuspenseQuery({
    queryKey: ['getSnapshotResume', resumeId],
    queryFn: () => getSnapshotResume({ resumeId }),
  });
};
