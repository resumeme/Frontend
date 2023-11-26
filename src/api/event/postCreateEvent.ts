import { resumeMeAxios } from '../axios';
import CONSTANTS from '~/constants';
import { CreateEvent } from '~/types/event/event';
import { getCookie } from '~/utils/cookie';

const postCreateEvent = async (data: CreateEvent): Promise<{ id: number }> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const offset = new Date().getTimezoneOffset() * 60000;

  const formattedDate = new Date(Date.now() - offset).toISOString().substring(0, 16);

  data.time.now = formattedDate;
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
