import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import Career from '~/types/career';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

export const postResumeCareer = async (resumeId: number, resumeCareer: Career) => {
  try {
    const { data } = await resumeMeAxios.post(`/resume.../${resumeId}`, resumeCareer);
    return data;
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
  }
};
