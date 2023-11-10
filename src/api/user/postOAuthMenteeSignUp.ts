import { resumeMeAxios } from '../axios';
import { SignUpMentee } from '~/types/signUp';

const postOauthMenteeSignUp = async (body: SignUpMentee) => {
  const { data } = await resumeMeAxios.post('/v1/mentors', body);
  return { data };
};

export default postOauthMenteeSignUp;
