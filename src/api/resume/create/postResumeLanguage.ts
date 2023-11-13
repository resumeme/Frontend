import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { Language } from '~/types/language';
import { getCookie } from '~/utils/cookie';

type PostResumeLanguage = { resumeId: string; resumeLanguage: Language };

export const postResumeLanguage = async ({ resumeId, resumeLanguage }: PostResumeLanguage) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  try {
    const { data } = await resumeMeAxios.post(
      `/v1/resume/${resumeId}/foreign-languages`,
      resumeLanguage,
      {
        headers: {
          /**FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
          Authorization: accessToken,
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
