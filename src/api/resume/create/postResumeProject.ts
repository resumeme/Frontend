import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { Project } from '~/types/project';

type postResumeProject = { resumeId: string; resumeProject: Project };

export const postResumeProject = async ({ resumeId, resumeProject }: postResumeProject) => {
  try {
    const { data } = await resumeMeAxios.post(`/v1/resume/${resumeId}/projects`, resumeProject, {
      headers: {
        /**FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
        access: import.meta.env.VITE_TEMP_MENTEE_TOKEN,
      },
    });
    return data;
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
  }
};
