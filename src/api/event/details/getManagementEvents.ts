import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ReadEvent } from '~/types/event';
import { getCookie } from '~/utils/cookie';

export type GetEvents = { eventId?: string };

export const getManagementEvents = async (): Promise<ReadEvent[]> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/events`, {
    headers: {
      Authorization: accessToken,
    },
  });

  return data;
};
