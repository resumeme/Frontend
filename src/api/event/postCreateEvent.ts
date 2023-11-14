import { resumeMeAxios } from '../axios';
import CONSTANTS from '~/constants';
import { CreateEvent } from '~/types/event';
import { getCookie } from '~/utils/cookie';

const postCreateEvent = async (data: CreateEvent): Promise<{ id: number }> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  data.time.now = new Date().toISOString().substring(0, 16);
  data.time.endDate = new Date(data.time.endDate).toISOString().substring(0, 16);

  const { data: eventId } = await resumeMeAxios.post(
    '/v1/events',
    { ...data },
    {
      headers: {
        [CONSTANTS.ACCESS_TOKEN_HEADER]: accessToken,
      },
    },
  );

  return eventId;
};
export default postCreateEvent;
