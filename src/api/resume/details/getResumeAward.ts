import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ReadAward } from '~/types/award';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { getCookie } from '~/utils/cookie';

export type GetResumeAward = { resumeId: string };

export const getResumeAward = async ({ resumeId }: GetResumeAward): Promise<ReadAward[]> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  try {
    const { data } = await resumeMeAxios.get(`/v1/resumes/${resumeId}/certifications `, {
      headers: {
        Authorization: accessToken,
      },
    });
    return data['certifications'] ?? [];
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
    return [];
  }
};
