import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

export type GetIsAppliedEvent = { eventId: string };

export const getIsAppliedEvent = async ({ eventId }: GetIsAppliedEvent): Promise<boolean> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const {
    data: { id },
  } = await resumeMeAxios.get(`/v1/appliments/events/${eventId}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return id ? true : false;
};
