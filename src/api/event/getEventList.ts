import { resumeMeAxios } from '../axios';

export const getEventList = async () => {
  const data = await resumeMeAxios.get(`/v1/events`);
  return data;
};
