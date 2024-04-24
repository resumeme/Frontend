import { HttpResponse, http } from 'msw';
import { eventListMock } from '../mockData';
import { environments } from '~/config/environments';

export const handlers = [
  http.get(`${environments.baseUrlEnv()}/v1/events`, () => {
    return HttpResponse.json(eventListMock);
  }),
];
