import { ResumeStatus } from './status';
import { Position } from '../position';

export type ResumeListItem = {
  id: number;
  title: string;
  modifiedAt: string;
  position: string;
  memo: string;
};

export type MyResume = ResumeListItem & {
  position: Position[];
};

export type FeedbackResume = {
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
