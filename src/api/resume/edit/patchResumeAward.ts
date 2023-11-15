import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { Award } from '~/types/award';
import { getCookie } from '~/utils/cookie';

type PatchResumeAward = { resumeId: string; blockId: string; body: Award };

export const patchResumeAward = async ({ resumeId, blockId, body }: PatchResumeAward) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.patch(
    `/v1/resumes/${resumeId}/certifications/components/${blockId}`,
    body,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
