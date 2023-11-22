import { Categories } from '../resume/categories';

export type DeleteResumeCategory<T extends Categories> = ({
  resumeId,
  blockId,
}: {
  resumeId: string;
  blockId: number;
}) => Promise<T>;
