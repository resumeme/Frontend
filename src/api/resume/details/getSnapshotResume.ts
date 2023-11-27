import { resumeMeAxios } from '~/api/axios';
import { AllBlocks } from '~/types/resume/allBlocks';

export const getSnapshotResume = async ({ resumeId }: { resumeId: string }): Promise<AllBlocks> => {
  const {
    data: { resumeData },
  } = await resumeMeAxios.get<{ resumeData: AllBlocks }>(
    `/v1/snapshot?resumeId=${resumeId}&type=resume`,
  );

  resumeData.careers = resumeData.careers ?? [];
  resumeData.certifications = resumeData.certifications ?? [];
  resumeData.activities = resumeData.activities ?? [];
  resumeData.projects = resumeData.projects ?? [];
  resumeData.foreignLanguages = resumeData.foreignLanguages ?? [];
  resumeData.trainings = resumeData.trainings ?? [];
  resumeData.links = resumeData.links ?? [];

  return resumeData;
};
