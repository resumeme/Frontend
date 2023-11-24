import { EventStatus } from '../eventStatus';
import { Position } from '../position';

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
  openDateTime: string | null;
  closeDateTime: string;
  endDate: string;
};

type EventResume = {
  resumeId: number;
  menteeName: string;
  resumeTitle: string;
  //TODO - 이벤트 참여 상태코드 나오면 변경
  progressStatus: string;
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

export type { CreateEvent, ReadEvent, EventResume, EventTime, ReadManagementEvent };
