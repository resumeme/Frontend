import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

export const postCreateResume = async () => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.post(
    `/v1/resumes`,
    {
      title: CONSTANTS.RESUME_DEFAULT_TITLE,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
