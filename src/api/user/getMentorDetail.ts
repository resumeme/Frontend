import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ReadMentor } from '~/types/mentor';
import { getCookie } from '~/utils/cookie';

export type GetMentorDetail = { mentorId?: string };

export const getMentorDetail = async ({ mentorId }: GetMentorDetail): Promise<ReadMentor> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/mentors/${mentorId}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
