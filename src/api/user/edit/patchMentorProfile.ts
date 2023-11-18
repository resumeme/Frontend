import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { EditMentor } from '~/types/mentor';
import { getCookie } from '~/utils/cookie';

export type PathMentorProfile = {
  mentorId: string;
  profile: EditMentor;
};

export const patchMentorProfile = async ({ mentorId, profile }: PathMentorProfile) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.patch(`/v1/mentors/${mentorId}`, profile, {
    headers: {
      Authorization: accessToken,
    },
  });

  return data;
};
