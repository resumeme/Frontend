import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

type DeleteFeedbackComment = {
  eventId: string;
  resumeId: string;
  commentId: number;
};

export const deleteFeedbackComment = async ({
  eventId,
  resumeId,
  commentId,
}: DeleteFeedbackComment) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.patch(
    `/v1/events/${eventId}/resumes/${resumeId}/comments/${commentId}`,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
