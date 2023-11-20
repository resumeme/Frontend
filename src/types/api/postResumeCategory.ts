import { Categories } from '../resume/categories';

export type PostResumeCategory<T extends Categories> = ({
  resumeId,
  body,
}: {
  resumeId: string;
  body: T;
}) => Promise<T>;
