import { resumeMeAxios } from '~/api/axios';

export const deleteResumeCategoryBlock = async ({
  resumeId,
  blockId,
}: {
  resumeId: string;
  blockId: number;
}) => {
  const { data } = await resumeMeAxios.delete(`/v1/resumes/${resumeId}/components/${blockId}`);
  return data;
};
