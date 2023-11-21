import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { FeedbackComment } from '~/types/resume/feedbackComment/feedbackComment';
import { getCookie } from '~/utils/cookie';

type PostFeedbackComment = { eventId: string; resumeId: string; body: FeedbackComment };

export const postFeedbackComment = async ({ eventId, resumeId, body }: PostFeedbackComment) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.post(
    `/v1/events/${eventId}/resumes/${resumeId}/comments`,
    body,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
