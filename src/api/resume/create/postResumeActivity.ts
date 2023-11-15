import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { Activity } from '~/types/activity';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { getCookie } from '~/utils/cookie';

type PostResumeActivity = { resumeId: string; resumeActivity: Activity };

export const postResumeActivity = async ({ resumeId, resumeActivity }: PostResumeActivity) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  try {
    const { data } = await resumeMeAxios.post(
      `/v1/resumes/${resumeId}/activities`,
      resumeActivity,
      {
        headers: {
          /**FIXME - 쿠키 등에 별도 저장된 토큰 가져오기 */
          Authorization: accessToken,
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
