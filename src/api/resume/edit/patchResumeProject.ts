import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { Project } from '~/types/project';
import { getCookie } from '~/utils/cookie';

type PatchResumeProject = { resumeId: string; blockId: string; body: Project };

export const patchResumeProject = async ({ resumeId, blockId, body }: PatchResumeProject) => {
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
