import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { ReferenceLink } from '~/types/referenceLink';

type postResumeLink = { resumeId: string; referenceLink: ReferenceLink };

/* TODO 이력서의 참고 링크를 저장하는 api가 필요! */
const api주소 = '';

export const postResumeLink = async ({ resumeId, referenceLink }: postResumeLink) => {
  try {
    const { data } = await resumeMeAxios.post(`v1/resume/${resumeId}/${api주소}`, referenceLink, {
      headers: {
        /* FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
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
