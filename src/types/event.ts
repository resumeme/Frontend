type CreateEvent = {
  info: EventInfo;
  time: EventTime;
  positions: string[];
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
  resumes: EventResume[];
  applicantCount: number;
  time: Omit<EventTime, 'now'>;
} & Omit<CreateEvent, 'time'>;

export type { CreateEvent, ReadEvent };
