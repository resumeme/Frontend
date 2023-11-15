import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { Activity } from '~/types/activity';
import { getCookie } from '~/utils/cookie';

type PatchResumeActivity = { resumeId: string; blockId: string; body: Activity };

export const patchResumeActivity = async ({ resumeId, blockId, body }: PatchResumeActivity) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.patch(
    `/v1/resumes/${resumeId}/activities/components/${blockId}`,
    body,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
