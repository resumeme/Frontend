import { ResumeStatus } from './status';
import { Position } from '../position';

type ResumeListItem = {
  id: number;
  title: string;
  modifiedAt: string;
  position: string;
  memo: string;
};

type MyResume = ResumeListItem & {
  position: Position[];
};

type FeedbackResume = {
  resumeTitle?: string;
  eventId: number;
  resumeId: number;
  status: ResumeStatus;
  title: string;
  mentorName: string;
  startDate: string;
  endDate: string;
  rejectMessage?: string;
};

export type { MyResume, ResumeListItem, FeedbackResume };
