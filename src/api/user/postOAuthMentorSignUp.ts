import { resumeMeAxios } from '../axios';
import { SignUpMentor } from '~/types/signUp';

const postOauthMentorSignUp = async (body: SignUpMentor) => {
  const { data } = await resumeMeAxios.post('/v1/mentors', body);
  return { data };
};

export default postOauthMentorSignUp;
