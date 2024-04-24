import { HttpResponse, http } from 'msw';
import {
  eventListMock,
  readEventMock1,
  readEventMock2,
  readEventMock0,
  readEventMock3,
} from './event.mock';
import { environments } from '~/config/environments';

const allEvents = new Map();
allEvents.set('0', readEventMock0);
allEvents.set('1', readEventMock1);
allEvents.set('2', readEventMock2);
allEvents.set('3', readEventMock3);

export const handlers = [
  http.get(`${environments.baseUrlEnv()}/v1/events`, () => {
    return HttpResponse.json(eventListMock);
  }),
  http.get(`${environments.baseUrlEnv()}/v1/events/:id`, ({ params }) => {
    const { id } = params;
    const event = allEvents.get(id);
    return HttpResponse.json(event);
  }),
];
