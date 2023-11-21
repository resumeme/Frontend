import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { FeedbackResume } from '~/types/resume/resumeListItem';
import { getCookie } from '~/utils/cookie';

export type GetFeedbackResumesProps = {
  menteeId: number;
};

export const getFeedbackResumes = async ({
  menteeId,
}: GetFeedbackResumesProps): Promise<FeedbackResume[]> => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  const { data } = await resumeMeAxios.get(`/v1/mentees/${menteeId}/events`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
