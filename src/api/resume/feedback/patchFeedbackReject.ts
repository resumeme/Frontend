import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { EventReject } from '~/types/resume/eventReject';
import { getCookie } from '~/utils/cookie';

type PatchFeedbackReject = { eventId: string; body: EventReject };

export const patchFeedbackReject = async ({ eventId, body }: PatchFeedbackReject) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.patch(`/v1/appliments/events/${eventId}`, body, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
