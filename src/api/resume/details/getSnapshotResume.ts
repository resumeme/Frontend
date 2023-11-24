import { resumeMeAxios } from '~/api/axios';
import { AllBlocks } from '~/types/resume/allBlocks';

export const getSnapshotResume = async ({ resumeId }: { resumeId: string }): Promise<AllBlocks> => {
  const { data } = await resumeMeAxios.get<AllBlocks>(`/v1/snapshot?resumeId=${resumeId}`);

  data.careers = data.careers ?? [];
  data.certifications = data.certifications ?? [];
  data.activities = data.activities ?? [];
  data.projects = data.projects ?? [];
  data.foreignLanguages = data.foreignLanguages ?? [];
  data.trainings = data.trainings ?? [];
  data.links = data.links ?? [];

  return data;
};
