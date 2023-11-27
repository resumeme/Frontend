import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { AllBlocks } from '~/types/resume/allBlocks';
import { getCookie } from '~/utils/cookie';

export type GetResumeDetails = { resumeId: string };

export const getResumeDetails = async ({ resumeId }: GetResumeDetails): Promise<AllBlocks> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.get(`/v1/resumes/${resumeId}`, {
    headers: {
      Authorization: accessToken,
    },
  });

  data.careers = data.careers ?? [];
  data.certifications = data.certifications ?? [];
  data.activities = data.activities ?? [];
  data.projects = data.projects ?? [];
  data.foreignLanguages = data.foreignLanguages ?? [];
  data.trainings = data.trainings ?? [];
  data.links = data.links ?? [];

  return data;
};
