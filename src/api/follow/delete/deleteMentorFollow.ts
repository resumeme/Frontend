import { resumeMeAxios } from '~/api/axios';
import { MentorFollow } from '~/api/follow/create/postMentorFollow';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

const deleteMentorFollow = async ({ mentorId }: MentorFollow) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.delete(`/v1/follows/${mentorId}`, {
    headers: {
      Authorization: accessToken,
    },
  });

  return data;
};

export { deleteMentorFollow };
