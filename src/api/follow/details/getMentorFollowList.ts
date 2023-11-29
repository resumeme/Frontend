import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { FollowInfo } from '~/types/follow/followList';
import { getCookie } from '~/utils/cookie';

const getMentorFollowList = async (): Promise<FollowInfo[]> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/follows`, {
    headers: {
      Authorization: accessToken,
    },
  });

  return data;
};

export { getMentorFollowList };
