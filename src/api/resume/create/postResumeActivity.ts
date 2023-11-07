import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import { Activity } from '~/types/activity';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

type PostResumeActivity = { resumeId: string; resumeActivity: Activity };

export const postResumeActivity = async ({ resumeId, resumeActivity }: PostResumeActivity) => {
  try {
    const { data } = await resumeMeAxios.post(`/v1/resume/${resumeId}/activities`, resumeActivity, {
      headers: {
        /**FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
        Authorization: import.meta.env.VITE_TEMP_MENTEE_TOKEN,
      },
    });
    return data;
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
  }
};
