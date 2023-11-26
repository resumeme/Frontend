import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ReadEvent } from '~/types/event/event';
import { getCookie } from '~/utils/cookie';

export type GetEventDetail = { eventId: string };

export const getEventDetail = async ({ eventId }: GetEventDetail): Promise<ReadEvent> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/events/${eventId}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
