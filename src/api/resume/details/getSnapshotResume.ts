import { resumeMeAxios } from '~/api/axios';
import { AllBlocks } from '~/types/resume/allBlocks';

export const getSnapshotResume = async ({ resumeId }: { resumeId: string }): Promise<AllBlocks> => {
  const { data } = await resumeMeAxios.get(`/v1/snapshot?resumeId=${resumeId}`);
  return data;
};
