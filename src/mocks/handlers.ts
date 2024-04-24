import { handlers as getEventListItemHandlers } from './event/details/getEventDetail';
import { handlers as getEventListHandlers } from './event/getEventList';
import { handlers as createResumeHandlers } from './resume/create/postCreateResume';
import { handlers as getMentorDetailHandlers } from './user/getMentorDetail';

export const handlers = [
  ...getEventListHandlers,
  ...getEventListItemHandlers,
  ...getMentorDetailHandlers,
  ...createResumeHandlers,
];
