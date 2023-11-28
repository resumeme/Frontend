import { MentorFollow } from '../create/postMentorFollow';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { FollowId } from '~/types/follow/followList';
import { getCookie } from '~/utils/cookie';

const getMentorFollow = async ({ mentorId }: MentorFollow): Promise<FollowId> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/follows/mentors/${mentorId}`, {
    headers: {
      Authorization: accessToken,
    },
  });

  return data;
};

export { getMentorFollow };
