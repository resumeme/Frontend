import { EventStatus } from '../eventStatus';
import { Position } from '../position';
import { ResumeStatus } from '../resume/status';

export type CreateEvent = {
  info: EventInfo;
  time: CreateEventTime;
  positions: Position[];
};

type EventInfo = {
  title: string;
  content: string;
  maximumAttendee: number;
};

export type EventTime = {
  now: string;
  openDateTime: string;
  closeDateTime: string;
  endDate: string;
};

export type CreateEventTime = {
  openDateTime: string | null;
} & Omit<EventTime, 'openDateTime'>;

export type EventResume = {
  resumeId: number;
  menteeName: string;
  resumeTitle: string;
  progressStatus: ResumeStatus;
  modifiedAt?: string;
};

export type ReadEvent = {
  id: number;
  mentorId: number;
  title: string;
  content: string;
  maximumCount: number;
  currentApplicantCount: number;
  status: EventStatus;
  positions: Position[];
  timeInfo: Omit<EventTime, 'now'>;
};

export type ReadManagementEvent = {
  info: ReadEvent;
  resumes: EventResume[];
};
