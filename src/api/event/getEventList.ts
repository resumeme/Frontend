import { resumeMeAxios } from '../axios';
import CONSTANTS from '~/constants';
import { EventList } from '~/types/event/eventList';
import { Pagination } from '~/types/pagination';
import { getCookie } from '~/utils/cookie';

export const getEventList = async ({ page, size }: Pagination): Promise<EventList> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/events?page=${page}&size=${size}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
