import { eventHandlers } from './event';
import { resumeHandlers } from './resume';
import { userHandlers } from './user';

export const handlers = [...eventHandlers, ...resumeHandlers, ...userHandlers];
