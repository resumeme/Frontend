import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { PatchResumeCategory } from '~/types/api/patchResumeCategory';
import { Award } from '~/types/award';
import { getCookie } from '~/utils/cookie';

export const patchResumeAward: PatchResumeCategory<Award> = async ({ resumeId, blockId, body }) => {
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
