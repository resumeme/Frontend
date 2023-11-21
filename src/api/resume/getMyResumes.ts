import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { MyResume } from '~/types/resume/resumeListItem';
import { getCookie } from '~/utils/cookie';

export const getMyResumes = async (): Promise<MyResume[]> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/resumes`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
