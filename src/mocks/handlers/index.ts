import { handlers as eventHandlers } from './event';
import { handlers as resumeHandlers } from './resume';
import { handlers as userHandlers } from './user';

export const handlers = [...eventHandlers, ...resumeHandlers, ...userHandlers];
