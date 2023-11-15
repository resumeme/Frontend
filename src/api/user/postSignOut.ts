import { resumeMeAxios } from '../axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

const postSignOut = async () => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const refreshToken = getCookie(CONSTANTS.REFRESH_TOKEN_HEADER);

  if (accessToken && refreshToken) {
    return await resumeMeAxios.post(`/v1/logout`, {
      headers: {
        [CONSTANTS.ACCESS_TOKEN_HEADER]: accessToken,
        [CONSTANTS.REFRESH_TOKEN_HEADER]: refreshToken,
      },
    });
  }
};

export default postSignOut;
