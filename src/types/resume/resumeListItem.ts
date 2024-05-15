import { ResumeStatus } from './status';

export type MyResume = {
  id: number;
  title: string;
  modifiedAt: string;
  memo: string;
  position: string;
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
