import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

type Memo = {
  memo: string;
};
type PatchResumeMemo = { resumeId: string; resumeMemo: Memo };

export const patchResumeMemo = async ({ resumeId, resumeMemo }: PatchResumeMemo) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  const { data } = await resumeMeAxios.patch(`v2/resumes/${resumeId}`, resumeMemo, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
};
