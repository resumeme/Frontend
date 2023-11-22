import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

type Body = {
  rejectMessage: string;
};

type PatchFeedbackReject = { eventId: string; menteeId: string; body: Body };

export const patchFeedbackReject = async ({ eventId, menteeId, body }: PatchFeedbackReject) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.patch(`/v1/events/${eventId}/mentee/${menteeId}`, body, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
