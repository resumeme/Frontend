import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ReadReferenceLink } from '~/types/referenceLink';
import { getCookie } from '~/utils/cookie';

export type GetResumeReferenceLinks = { resumeId: string };

export const getResumeReferenceLinks = async ({
  resumeId,
}: GetResumeReferenceLinks): Promise<ReadReferenceLink[]> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.get(`/v1/resumes/${resumeId}/links`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data.links ?? [];
};
