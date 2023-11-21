import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { PatchResumeCategory } from '~/types/api/patchResumeCategory';
import { Training } from '~/types/training';
import { getCookie } from '~/utils/cookie';

export const patchResumeTraining: PatchResumeCategory<Training> = async ({
  resumeId,
  blockId,
  body,
}) => {
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
