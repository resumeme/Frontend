import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { PatchResumeCategory } from '~/types/api/patchResumeCategory';
import { Language } from '~/types/language';
import { getCookie } from '~/utils/cookie';

export const patchResumeLanguage: PatchResumeCategory<Language> = async ({
  resumeId,
  blockId,
  body,
}) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.patch(
    `/v1/resumes/${resumeId}/foreignLanguages/components/${blockId}`,
    body,
    {
      headers: {
        Authorization: accessToken,
      },
    },
  );
  return data;
};
