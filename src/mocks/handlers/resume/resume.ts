import { HttpResponse, http } from 'msw';
import { environments } from '~/config/environments';

export const handlers = [
  http.post(`${environments.baseUrlEnv()}/v1/resumes`, () => {
    return HttpResponse.json();
  }),
];
