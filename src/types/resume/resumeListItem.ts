import { Position } from '../position';

type ResumeListItem = {
  id: number;
  title: string;
  modifiedAt: string;
};

type MyResume = ResumeListItem & {
  position: Position[];
};

export type { MyResume, ResumeListItem };
