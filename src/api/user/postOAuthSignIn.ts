import { resumeMeAxios } from '../axios';
import CONSTANTS from '~/constants';

type PostOauthSignIn = { loginProvider: string; code: string };
const postOAuthSignIn = async ({ loginProvider, code }: PostOauthSignIn) => {
  const { headers } = await resumeMeAxios.post('/v1/login/oauth2/code', {
    loginProvider,
    code,
  });
  const cacheKey = headers[CONSTANTS.CACHE_KEY_HEADER];
  const accessToken = headers[CONSTANTS.ACCESS_TOKEN_HEADER];
  const refreshToken = headers[CONSTANTS.REFRESH_TOKEN_HEADER];
  return { cacheKey, accessToken, refreshToken };
};

export default postOAuthSignIn;
