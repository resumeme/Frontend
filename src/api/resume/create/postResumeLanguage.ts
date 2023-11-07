import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { Language } from '~/types/language';

type PostResumeLanguage = { resumeId: string; resumeLanguage: Language };

export const postResumeLanguage = async ({ resumeId, resumeLanguage }: PostResumeLanguage) => {
  try {
    const { data } = await resumeMeAxios.post(
      `/v1/resume/${resumeId}/foreign-languages`,
      resumeLanguage,
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
