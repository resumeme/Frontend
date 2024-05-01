import { ResumeStatus } from './status';
import { Position } from '../position';

export type MyResume = {
  id: number;
  title: string;
  modifiedAt: string;
  memo: string;
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
