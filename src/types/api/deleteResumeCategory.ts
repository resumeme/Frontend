import { ResumeCategoryVariables } from './resumeCategoryVariables';
import { Categories } from '../resume/categories';

export type DeleteResumeCategory<T extends Categories> = ({
  resumeId,
  blockId,
}: ResumeCategoryVariables<T>) => Promise<T>;
