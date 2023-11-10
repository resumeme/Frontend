import { resumeMeAxios } from '~/api/axios';
import { ReadMentor } from '~/types/mentor';

export type GetMentorDetail = { mentorId?: string };

export const getMentorDetail = async ({ mentorId }: GetMentorDetail): Promise<ReadMentor> => {
  const { data } = await resumeMeAxios.get(`/v1/mentors/${mentorId}`, {
    headers: {
      /**FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
      Authorization: import.meta.env.VITE_TEMP_MENTEE_TOKEN,
    },
  });
  return data;
};
