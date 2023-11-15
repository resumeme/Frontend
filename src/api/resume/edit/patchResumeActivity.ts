import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { Activity } from '~/types/activity';
import { PatchResumeCategory } from '~/types/api/patchResumeCategory';
import { getCookie } from '~/utils/cookie';

export const patchResumeActivity: PatchResumeCategory<Activity> = async ({
  resumeId,
  blockId,
  body,
}) => {
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
