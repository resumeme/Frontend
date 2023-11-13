import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ReadMentor } from '~/types/mentor';
import { getCookie } from '~/utils/cookie';

export type GetMentorDetail = { mentorId?: string };

export const getMentorDetail = async ({ mentorId }: GetMentorDetail): Promise<ReadMentor> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/mentors/${mentorId}`, {
    headers: {
      /**FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
      Authorization: accessToken,
    },
  });
  return data;
};
