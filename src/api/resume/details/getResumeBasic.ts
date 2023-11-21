// import { isAxiosError } from 'axios';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { BasicInfo } from '~/types/basicInfo';
// import { ResumeMeErrorResponse } from '~/types/errorResponse';
import { getCookie } from '~/utils/cookie';
import { formatPhoneNumber } from '~/utils/formatPhoneNumber';

export type GetResumeBasic = { resumeId: string };

export const getResumeBasic = async ({ resumeId }: GetResumeBasic): Promise<BasicInfo> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/resumes/${resumeId}/basic`, {
    headers: {
      Authorization: accessToken,
    },
  });

  if (data.ownerInfo && data.ownerInfo.phoneNumber) {
    data.ownerInfo.phoneNumber = formatPhoneNumber(data.ownerInfo.phoneNumber);
  }

  return data;
};
