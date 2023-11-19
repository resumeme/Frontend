import { EventStatus } from '~/types/eventStatus';
import { Position } from '~/types/position';

export type EventListItem = {
  info: {
    id: number;
    title: string;
    content: string;
    maximumCount: number;
    currentApplicantCount: number;
    status: EventStatus;
    positions: Position[];
    timeInfo: {
      openDateTime: string;
      closeDateTime: string;
      endDate: string;
    };
  };
  mentorInfo: {
    mentorId: number;
    nickname: string;
    imageUrl: string;
  };
};
