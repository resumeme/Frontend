import { resumeMeAxios } from '~/api/axios';
import { ReadEvent } from '~/types/event';

export type GetEventDetail = { eventId?: string };

export const getEventDetail = async ({ eventId }: GetEventDetail): Promise<ReadEvent> => {
  const { data } = await resumeMeAxios.get(`/v1/events/${eventId}`, {
    headers: {
      /**FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
      Authorization: import.meta.env.VITE_TEMP_MENTOR_TOKEN,
    },
  });
  return data;
};
