import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { ReadMentor } from '~/types/mentor';

export type GetMentorDetail = { mentorId?: string };

export const getMentorDetail = async ({ mentorId }: GetMentorDetail): Promise<ReadMentor> => {
  try {
    const { data } = await resumeMeAxios.get(`/v1/mentors/${mentorId}`, {
      headers: {
        /**FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
        access: import.meta.env.VITE_TEMP_MENTEE_TOKEN,
      },
    });
    return data;
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
    return {} as ReadMentor;
  }
};
