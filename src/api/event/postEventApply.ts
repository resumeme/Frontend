import { resumeMeAxios } from '../axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

const postEventApply = async ({
  resumeId,
  eventId,
}: {
  resumeId: number;
  eventId: string;
}): Promise<{ id: number }> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.patch(
    `/v1/events/${eventId}`,
    { resumeId },
    {
      headers: {
        [CONSTANTS.ACCESS_TOKEN_HEADER]: accessToken,
      },
    },
  );

  return data;
};
export default postEventApply;
