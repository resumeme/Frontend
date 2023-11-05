import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

export const postCreateResume = async () => {
  try {
    const { data } = await resumeMeAxios.post(`/v1/resumes`, {
      title: CONSTANTS.RESUME_DEFAULT_TITLE,
    });
    return data;
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
  }
};
