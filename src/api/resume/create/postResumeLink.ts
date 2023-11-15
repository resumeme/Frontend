import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { ReferenceLink } from '~/types/referenceLink';
import { getCookie } from '~/utils/cookie';

type postResumeLink = { resumeId: string; referenceLink: ReferenceLink };

/* TODO 이력서의 참고 링크를 저장하는 api가 필요! */
const api주소 = '';

export const postResumeLink = async ({ resumeId, referenceLink }: postResumeLink) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  try {
    const { data } = await resumeMeAxios.post(`v1/resumes/${resumeId}/${api주소}`, referenceLink, {
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
