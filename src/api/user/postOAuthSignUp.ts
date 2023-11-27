import { resumeMeAxios } from '../axios';
import CONSTANTS from '~/constants';
import { SignUpMentee, SignUpMentor, SignUpRole } from '~/types/signUp';

type PostOAuthSignUp = { body: SignUpMentee | SignUpMentor; role: SignUpRole };
const postOauthSignUp = async ({ body, role }: PostOAuthSignUp) => {
  const targetEndPoint = role === 'mentee' ? 'mentees' : 'mentors';
  const { headers } = await resumeMeAxios.post(`/v1/${targetEndPoint}`, body);
  const accessToken = headers[CONSTANTS.ACCESS_TOKEN_HEADER];
  const refreshToken = headers[CONSTANTS.REFRESH_TOKEN_HEADER];
  return { accessToken, refreshToken };
};

export default postOauthSignUp;
