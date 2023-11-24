import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { BasicInfo } from '~/types/basicInfo';
import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { getCookie } from '~/utils/cookie';

type patchResumeBasicInfo = { resumeId: string; resumeBasicInfo: BasicInfo };

export const patchResumeBasicInfo = async ({ resumeId, resumeBasicInfo }: patchResumeBasicInfo) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  try {
    const { data } = await resumeMeAxios.patch(`/v2/resumes/${resumeId}`, resumeBasicInfo, {
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
