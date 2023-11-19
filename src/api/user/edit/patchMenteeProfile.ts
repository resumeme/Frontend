import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { EditMentee } from '~/types/mentee';
import { getCookie } from '~/utils/cookie';

export type PathMenteeProfile = {
  menteeId: string;
  profile: EditMentee;
};

export const patchMenteeProfile = async ({ menteeId, profile }: PathMenteeProfile) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.patch(`/v1/mentees/${menteeId}`, profile, {
    headers: {
      Authorization: accessToken,
    },
  });

  return data;
};
