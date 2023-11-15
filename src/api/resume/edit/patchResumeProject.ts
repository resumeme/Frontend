import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { PatchResumeCategory } from '~/types/api/patchResumeCategory';
import { Project } from '~/types/project';
import { getCookie } from '~/utils/cookie';

export const patchResumeProject: PatchResumeCategory<Project> = async ({
  resumeId,
  blockId,
  body,
}) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.patch(
    `/v1/resumes/${resumeId}/projects/components/${blockId}`,
    body,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
