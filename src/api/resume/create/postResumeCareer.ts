import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import Career from '~/types/career';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { getCookie } from '~/utils/cookie';

type postResumeCareer = { resumeId: string; body: Career };

export const postResumeCareer = async ({ resumeId, body }: postResumeCareer) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  try {
    const { data } = await resumeMeAxios.post(`/v1/resumes/${resumeId}/careers`, body, {
      headers: {
        /**FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
        Authorization: accessToken,
      },
    });
    return data;
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
  }
};
