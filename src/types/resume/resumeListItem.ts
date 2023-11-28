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
  //TODO - api 수정 후 변경 - ?제거, title-eventTItle로 변경
  resumeTitle?: string;
  eventId: number;
  resumeId: number;
  status: ResumeStatus;
  title: string;
  mentorName: string;
  startDate: string;
  endDate: string;
};

export type { MyResume, ResumeListItem, FeedbackResume };
