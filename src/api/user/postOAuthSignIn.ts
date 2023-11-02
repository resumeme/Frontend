import { resumeMeAxios } from '../axios';

const postOAuthSignIn = async (loginProvider: string, code: string) => {
  const { data } = await resumeMeAxios.post('/v1/login/oauth2/code', {
    loginProvider,
    code,
  });
  return data;
};

export default postOAuthSignIn;
