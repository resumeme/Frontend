import { ResumeCategoryVariables } from './resumeCategoryVariables';
import { Categories } from '../resume/categories';

export type PatchResumeCategory<T extends Categories> = ({
  resumeId,
  blockId,
  body,
}: ResumeCategoryVariables<T>) => Promise<T>;
