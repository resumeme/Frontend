import { resumeMeAxios } from '../axios';
import CONSTANTS from '~/constants';
import { EventListItem } from '~/types/event/eventListItem';
import { getCookie } from '~/utils/cookie';

export const getEventList = async (): Promise<EventListItem[]> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/events`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
