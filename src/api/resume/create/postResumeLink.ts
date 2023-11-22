import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { ReferenceLink } from '~/types/referenceLink';
import { getCookie } from '~/utils/cookie';

type postResumeLink = { resumeId: string; body: ReferenceLink };

export const postResumeLink = async ({ resumeId, body }: postResumeLink) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  try {
    const { data } = await resumeMeAxios.post(`v1/resumes/${resumeId}/links`, body, {
      headers: {
        Authorization: accessToken,
      },
    });
    return data;
  } catch (e) {
    if (isAxiosError<ResumeMeErrorResponse>(e)) {
      throw new Error(e.response?.data.message);
    }
  }
};
