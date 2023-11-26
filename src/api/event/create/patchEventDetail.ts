import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { CreateEvent } from '~/types/event/event';
import { getCookie } from '~/utils/cookie';

type PatchEventDetail = {
  eventId: string;
  data: CreateEvent;
};

const patchEventDetail = async ({ data, eventId }: PatchEventDetail): Promise<{ id: number }> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  data.time.now = new Date().toISOString().substring(0, 16);
  data.time.endDate = new Date(data.time.endDate).toISOString().substring(0, 16);

  const { data: resEventId } = await resumeMeAxios.patch(
    `/v1/events/${eventId}`,
    { ...data },
    {
      headers: {
        [CONSTANTS.ACCESS_TOKEN_HEADER]: accessToken,
      },
    },
  );

  return resEventId;
};
export default patchEventDetail;
