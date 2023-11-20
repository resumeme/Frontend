import { ReadEvent } from '~/types/event/event';
import { PageData } from '~/types/pageData';

export type EventListItem = {
  info: ReadEvent;
  mentorInfo: {
    mentorId: number;
    nickname: string;
    imageUrl: string;
  };
};

export type EventList = {
  events: EventListItem[];
  pageData: PageData;
};
