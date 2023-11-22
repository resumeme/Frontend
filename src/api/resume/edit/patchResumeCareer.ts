import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { PatchResumeCategory } from '~/types/api/patchResumeCategory';
import { Career } from '~/types/career';
import { getCookie } from '~/utils/cookie';

export const patchResumeCareer: PatchResumeCategory<Career> = async ({
  resumeId,
  blockId,
  body,
}) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.patch(
    `/v1/resumes/${resumeId}/careers/components/${blockId}`,
    body,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
