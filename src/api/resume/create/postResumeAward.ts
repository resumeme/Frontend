import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import { Award } from '~/types/award';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

type postResumeAward = { resumeId: string; resumeAward: Award };

export const postResumeAward = async ({ resumeId, resumeAward }: postResumeAward) => {
  try {
    const { data } = await resumeMeAxios.post(
      `/v1/resume/${resumeId}/certifications`,
      resumeAward,
      {
        headers: {
          /**FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
          Authorization: import.meta.env.VITE_TEMP_MENTEE_TOKEN,
        },
      },
    );
    return data;
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
  }
};
