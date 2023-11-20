import { Position } from './position';

type CreateEvent = {
  info: EventInfo;
  time: EventTime;
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

type EventResume = {
  resumeId: number;
  menteeName: string;
  resumeTitle: string;
  progressStatus: string;
  modifiedAt?: string;
};

type ReadEvent = {
  id: number;
  title: string;
  content: string;
  maximumCount: number;
  currentApplicantCount: number;
  //TODO 상태 수정
  status: string;
  positions: Position[];
  timeInfo: Omit<EventTime, 'now'>;
};

export type { CreateEvent, ReadEvent, EventResume, EventTime };
