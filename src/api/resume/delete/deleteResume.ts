import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

export type DeleteResume = { resumeId: string };

export const deleteResume = async ({ resumeId }: DeleteResume) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.delete(`/v1/resumes/${resumeId}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
