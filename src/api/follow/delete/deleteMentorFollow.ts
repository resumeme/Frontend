import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

const deleteMentorFollow = async ({ followId }: { followId: number }) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.delete(`/v1/follows/${followId}`, {
    headers: {
      Authorization: accessToken,
    },
  });

  return data;
};

export { deleteMentorFollow };
