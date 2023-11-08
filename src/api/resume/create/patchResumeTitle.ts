import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

type patchResumeTitle = { resumeId: string; resumeTitle: string };

export const patchResumeTitle = async ({ resumeId, resumeTitle }: patchResumeTitle) => {
  try {
    const { data } = await resumeMeAxios.patch(
      `v1/resumes/${resumeId}/title`,
      {
        title: resumeTitle,
      },
      {
        headers: {
          /* FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
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
