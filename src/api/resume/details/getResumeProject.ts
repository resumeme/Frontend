import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { ReadProject } from '~/types/project';
import { getCookie } from '~/utils/cookie';

export type GetResumeProject = { resumeId: string };

export const getResumeProject = async ({ resumeId }: GetResumeProject): Promise<ReadProject[]> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  try {
    const { data } = await resumeMeAxios.get(`/v1/resumes/${resumeId}/projects`, {
      headers: {
        Authorization: accessToken,
      },
    });
    return data['projects'] ?? [];
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
    return [];
  }
};
