import { resumeMeAxios } from '../axios';
import { EventListItem } from '~/types/event/eventListItem';

export const getEventList = async (): Promise<EventListItem[]> => {
  const { data } = await resumeMeAxios.get(`/v1/events`);
  return data;
};
