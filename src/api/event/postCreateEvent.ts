import { resumeMeAxios } from '../axios';
import CONSTANTS from '~/constants';
import { CreateEvent } from '~/types/event/event';
import { getCookie } from '~/utils/cookie';

const postCreateEvent = async (data: CreateEvent): Promise<{ id: number }> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}T${hour}:${minute}`;

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
