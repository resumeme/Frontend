import { ReadEvent } from '~/types/event/event';
import { PageData } from '~/types/pageData';

export type EventListItem = {
  events: {
    info: ReadEvent;
    mentorInfo: {
      mentorId: number;
      nickname: string;
      imageUrl: string;
    };
  }[];
  pageData: PageData;
};
