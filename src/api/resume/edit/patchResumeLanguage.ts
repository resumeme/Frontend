import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { Language } from '~/types/language';
import { getCookie } from '~/utils/cookie';

type PatchResumeLanguage = { resumeId: string; blockId: string; body: Language };

export const patchResumeLanguage = async ({ resumeId, blockId, body }: PatchResumeLanguage) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.patch(
    `/v1/resumes/${resumeId}/foreign-languages/components/${blockId}`,
    body,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
