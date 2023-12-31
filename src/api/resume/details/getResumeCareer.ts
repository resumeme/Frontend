import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ReadCareer } from '~/types/career';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { getCookie } from '~/utils/cookie';

export type GetResumeCareer = { resumeId: string };

export const getResumeCareer = async ({ resumeId }: GetResumeCareer): Promise<ReadCareer[]> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  try {
    const { data } = await resumeMeAxios.get(`/v1/resumes/${resumeId}/careers`, {
      headers: {
        Authorization: accessToken,
      },
    });
    return data['careers'] ?? [];
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
    return [];
  }
};
