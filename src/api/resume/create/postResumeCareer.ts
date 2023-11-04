import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import Career from '~/types/career';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

export const postResumeCareer = async (resumeId: string, resumeCareer: Career) => {
  try {
    const { data } = await resumeMeAxios.post(`/api/v1/resume/${resumeId}/careers`, resumeCareer);
    return data;
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
  }
};
