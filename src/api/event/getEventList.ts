import { resumeMeAxios } from '../axios';
import CONSTANTS from '~/constants';
import { EventList } from '~/types/event/eventList';
import { getCookie } from '~/utils/cookie';

export const getEventList = async (): Promise<EventList> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/events`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
