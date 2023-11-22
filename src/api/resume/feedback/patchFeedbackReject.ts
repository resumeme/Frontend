import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { EventReject } from '~/types/resume/eventReject';
import { getCookie } from '~/utils/cookie';

type PatchFeedbackReject = { eventId: string; menteeId: number; body: EventReject };

export const patchFeedbackReject = async ({ eventId, menteeId, body }: PatchFeedbackReject) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.patch(`/v1/events/${eventId}/mentee/${menteeId}`, body, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
