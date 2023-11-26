import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

type PatchFeedbackReflectComplete = { resumeId: string };

export const patchFeedbackReflectComplete = async ({ resumeId }: PatchFeedbackReflectComplete) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.patch(`/v2/resumes/${resumeId}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
