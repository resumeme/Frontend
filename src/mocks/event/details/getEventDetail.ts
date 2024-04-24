import { HttpResponse, http } from 'msw';
import { environments } from '~/config/environments';
import { readEventMock } from '~/mocks/mockData';

export const handlers = [
  http.get(`${environments.baseUrlEnv()}/v1/events/:id`, () => {
    return HttpResponse.json(readEventMock);
  }),
];
