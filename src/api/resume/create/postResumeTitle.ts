import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { getCookie } from '~/utils/cookie';

type postResumeTitle = { resumeId: string; resumeTitle: string };

/* TODO 이력서 제목 수정 api가 필요! */
const api주소 = '';

export const postResumeTitle = async ({ resumeId, resumeTitle }: postResumeTitle) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  try {
    const { data } = await resumeMeAxios.post(`v1/resume/${resumeId}/${api주소}`, resumeTitle, {
      headers: {
        /* FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
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
