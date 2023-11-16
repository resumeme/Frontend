import { Categories } from '../resume/categories';

export type ResumeCategoryVariables<T extends Categories> = {
  resumeId: string;
  blockId: string;
  body?: T;
};
