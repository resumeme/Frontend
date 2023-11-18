import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ReadEvent } from '~/types/event';
import { getCookie } from '~/utils/cookie';

export type getManagementEventsProps = { userId: number };

export const getManagementEvents = async ({
  userId,
}: getManagementEventsProps): Promise<ReadEvent[]> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/mentors/${userId}/events`, {
    headers: {
      Authorization: accessToken,
    },
  });

  return data;
};
