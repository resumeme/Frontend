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
};

type ReadEvent = {
  info: {
    title: string;
    content: string;
    maximumCount: number;
    currentApplicantCount: number;
    positions: Position[];
    timeInfo: Omit<EventTime, 'now'>;
  };
  resumes: EventResume[];
};

type EventWithMentor = {
  eventInfo: {
    eventId: number;
    title: string;
    endDate: string;
    status: string;
    positions: Position[];
  };
  mentorInfo: {
    mentorId: number;
    nickname: string;
    imageUrl: string;
  };
};

type ResumeWithEvents = {
  resumeInfo: {
    id: number;
    title: string;
    modifiedAt?: string;
  };
  events: EventWithMentor[];
};

export type { CreateEvent, ReadEvent, EventResume, EventTime, ResumeWithEvents };
