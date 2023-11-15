import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { Training } from '~/types/training';
import { getCookie } from '~/utils/cookie';

type PatchResumeTraining = { resumeId: string; blockId: string; body: Training };

export const patchResumeTraining = async ({ resumeId, blockId, body }: PatchResumeTraining) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.patch(
    `/v1/resumes/${resumeId}/trainings/components/${blockId}`,
    body,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
