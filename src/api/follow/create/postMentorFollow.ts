import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

export type MentorFollow = {
  mentorId: number;
};

const postMentorFollow = async ({ mentorId }: MentorFollow) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.post(
    `/v1/follows`,
    { mentorId },
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );

  return data;
};

export { postMentorFollow };
