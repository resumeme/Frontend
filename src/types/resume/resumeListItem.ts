import { ResumeStatus } from './status';
import { Position } from '../position';

type ResumeListItem = {
  id: number;
  title: string;
  modifiedAt: string;
};

type MyResume = ResumeListItem & {
  position: Position[];
};

type FeedbackResume = {
  resumeId: number;
  status: ResumeStatus;
  title: string;
  mentorName: string;
  startDate: string;
  endDate: string;
};

export type { MyResume, ResumeListItem, FeedbackResume };
