import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

export type DeleteReferenceLink = { resumeId: string; linkId: number };

export const deleteReferenceLink = async ({ resumeId, linkId }: DeleteReferenceLink) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.delete(`/v1/resumes/${resumeId}/components/${linkId}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
