import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { Feedback } from '~/types/event/feedback';
import { getCookie } from '~/utils/cookie';

export type GetResumeFeedbacks = {
  resumeId: string;
  eventId: string;
};

export const getResumeFeedbacks = async ({
  resumeId,
  eventId,
}: GetResumeFeedbacks): Promise<Feedback> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/events/${eventId}/resumes/${resumeId}/comments`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
