import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { FeedbackComplete } from '~/types/resume/feedbackComplete';
import { getCookie } from '~/utils/cookie';

type PatchFeedbackComplete = { eventId: string; body: FeedbackComplete };

export const patchFeedbackComplete = async ({ eventId, body }: PatchFeedbackComplete) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.patch(`/v1/appliments/events/${eventId}`, body, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
