import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { FeedbackComment } from '~/types/event/feedback';
import { getCookie } from '~/utils/cookie';

type PatchFeedbackComment = {
  eventId: string;
  resumeId: string;
  commentId: number;
  body: Pick<FeedbackComment, 'content'>;
};

export const patchFeedbackComment = async ({
  eventId,
  resumeId,
  commentId,
  body,
}: PatchFeedbackComment) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.patch(
    `/v1/events/${eventId}/resumes/${resumeId}/comments/${commentId}`,
    body,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
