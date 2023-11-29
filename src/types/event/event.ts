import { EventStatus } from '../eventStatus';
import { Position } from '../position';
import { ResumeStatus } from '../resume/status';

type CreateEvent = {
  info: EventInfo;
  time: CreateEventTime;
  positions: Position[];
};

type EventInfo = {
  title: string;
  content: string;
  maximumAttendee: number;
};

type EventTime = {
  now: string;
  openDateTime: string;
  closeDateTime: string;
  endDate: string;
};

type CreateEventTime = {
  openDateTime: string | null;
} & Omit<EventTime, 'openDateTime'>;

type EventResume = {
  resumeId: number;
  menteeName: string;
  resumeTitle: string;
  progressStatus: ResumeStatus;
  modifiedAt?: string;
};

type ReadEvent = {
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

type ReadManagementEvent = {
  info: {
    id: number;
    mentorId: number;
    status: EventStatus;
    title: string;
    content: string;
    maximumCount: number;
    currentApplicantCount: number;
    positions: Position[];
    timeInfo: Omit<EventTime, 'now'>;
  };
  resumes: EventResume[];
};

export type {
  CreateEvent,
  ReadEvent,
  EventResume,
  EventTime,
  ReadManagementEvent,
  CreateEventTime,
};
