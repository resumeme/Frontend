import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

type postResumeTitle = { resumeId: string; resumeTitle: string };

/* TODO 이력서 제목 수정 api가 필요! */
const api주소 = '';

export const postResumeTitle = async ({ resumeId, resumeTitle }: postResumeTitle) => {
  try {
    const { data } = await resumeMeAxios.post(`v1/resume/${resumeId}/${api주소}`, resumeTitle, {
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
