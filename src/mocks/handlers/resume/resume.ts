import { HttpResponse, http } from 'msw';
import { environments } from '~/config/environments';

export const handlers = [
  http.post(`${environments.baseUrlEnv()}/v1/resumes`, () => {
    return HttpResponse.json({ id: 0 });
  }),
  http.get(`${environments.baseUrlEnv()}/v1/resumes/:id/basic`, () => {
    return HttpResponse.json({
      title: '이력서 제목',
      position: 'FRONT',
      skills: ['React', 'TypeScript'],
      introduce: '',
      ownerInfo: {
        id: 0,
        name: '손흥민',
        phoneNumber: '01012345678',
      },
    });
  }),
  http.get(`${environments.baseUrlEnv()}/v1/resumes/:id/links`, () => {
    return HttpResponse.json();
  }),
  http.get(`${environments.baseUrlEnv()}/v1/resumes/:id/careers`, () => {
    return HttpResponse.json();
  }),
  http.get(`${environments.baseUrlEnv()}/v1/resumes/:id/projects`, () => {
    return HttpResponse.json();
  }),
  http.get(`${environments.baseUrlEnv()}/v1/resumes/:id/activities`, () => {
    return HttpResponse.json();
  }),
  http.get(`${environments.baseUrlEnv()}/v1/resumes/:id/certifications`, () => {
    return HttpResponse.json();
  }),
  http.get(`${environments.baseUrlEnv()}/v1/resumes/:id/foreignLanguages`, () => {
    return HttpResponse.json();
  }),
  http.get(`${environments.baseUrlEnv()}/v1/resumes/:id/trainings`, () => {
    return HttpResponse.json();
  }),
];
