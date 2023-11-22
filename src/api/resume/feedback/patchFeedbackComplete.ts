import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { FeedbackComplete } from '~/types/resume/feedbackComplete';
import { getCookie } from '~/utils/cookie';

type PatchFeedbackComplete = { eventId: string; resumeId: string; body: FeedbackComplete };

export const patchFeedbackComplete = async ({ eventId, resumeId, body }: PatchFeedbackComplete) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.patch(
    `/v1/events/${eventId}/resumes/${resumeId}/complete`,
    body,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
