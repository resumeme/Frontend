import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { Training } from '~/types/training';

type PostResumeTraining = { resumeId: string; resumeTraining: Training };

export const postResumeTraining = async ({ resumeId, resumeTraining }: PostResumeTraining) => {
  try {
    const { data } = await resumeMeAxios.post(`/v1/resume/${resumeId}/trainings`, resumeTraining, {
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
