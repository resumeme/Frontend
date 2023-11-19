import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { ResumeListItem } from '~/types/resume/resumeListItem';
import { getCookie } from '~/utils/cookie';

export const getMyResumes = async (): Promise<ResumeListItem[]> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.get(`/v1/resumes`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
