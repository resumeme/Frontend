import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import Career from '~/types/career';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

export const postResumeCareer = async (resumeId: string, resumeCareer: Career) => {
  try {
    const { data } = await resumeMeAxios.post(`/v1/resume/${resumeId}/careers`, resumeCareer, {
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
  }
};
