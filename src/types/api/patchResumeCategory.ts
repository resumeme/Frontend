import { Categories } from '../resume/categories';

export type PatchResumeCategory<T extends Categories> = ({
  resumeId,
  blockId,
  body,
}: {
  resumeId: string;
  blockId: string;
  body: T;
}) => Promise<T>;
