import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import Career from '~/types/career';
import { getCookie } from '~/utils/cookie';

type PatchResumeCareer = { resumeId: string; blockId: string; body: Career };

export const patchResumeCareer = async ({ resumeId, blockId, body }: PatchResumeCareer) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.patch(
    `/v1/resumes/${resumeId}/careers/components/${blockId}`,
    body,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
