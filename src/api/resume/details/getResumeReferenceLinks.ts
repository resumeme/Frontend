import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { getCookie } from '~/utils/cookie';

export type GetResumeReferenceLinks = { resumeId: string };

export const getResumeReferenceLinks = async ({ resumeId }: GetResumeReferenceLinks) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  try {
    const { data } = await resumeMeAxios.get(`/v1/resume/${resumeId}/link`, {
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
