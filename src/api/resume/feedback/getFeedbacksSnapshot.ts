import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { Feedback } from '~/types/event/feedback';
import { getCookie } from '~/utils/cookie';

export const getFeedbacksSnapshot = async ({
  resumeId,
}: {
  resumeId: string;
}): Promise<Feedback> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const {
    data: { snapshot },
  } = await resumeMeAxios.get(`/v1/snapshot?resumeId=${resumeId}&type=comment`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return snapshot;
};
