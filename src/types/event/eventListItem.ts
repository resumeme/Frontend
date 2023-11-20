import { ReadEvent } from '~/types/event/event';

export type EventListItem = {
  info: ReadEvent;
  mentorInfo: {
    mentorId: number;
    nickname: string;
    imageUrl: string;
  };
};
