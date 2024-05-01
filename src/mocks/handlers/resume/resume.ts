import { HttpResponse, http } from 'msw';
import { environments } from '~/config/environments';

const referenceLinkMock = [
  {
    componentId: 0,
    reflectFeedback: false,
    createdDate: '2024-05-01T23:59:59.999Z',
    linkType: 'GITHUB',
    url: 'https://github.com/resumeme/Frontend',
  },
];
const MOCK_RESUME_ID = 0;
export const handlers = [
  http.post(`${environments.baseUrlEnv()}/v1/resumes`, () => {
    return HttpResponse.json({ id: MOCK_RESUME_ID });
  }),
  http.get(`${environments.baseUrlEnv()}/v1/resumes/:id/basic`, () => {
    return HttpResponse.json();
  }),
  // patchResumeBasicInfo
  http.patch(`${environments.baseUrlEnv()}/v2/resumes/:id`, () => {
    return HttpResponse.json();
  }),
  http.post(`${environments.baseUrlEnv()}/v1/resumes/:id/links`, () => {
    return HttpResponse.json();
  }),
  http.delete(`${environments.baseUrlEnv()}/v1/resumes/:id/components/:linkId`, () => {
    return HttpResponse.json();
  }),
  http.get(`${environments.baseUrlEnv()}/v1/resumes/:id/links`, () => {
    return HttpResponse.json(referenceLinkMock);
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
  http.post(`${environments.baseUrlEnv()}/v1/resumes/:id/careers`, () => {
    return HttpResponse.json();
  }),
  http.post(`${environments.baseUrlEnv()}/v1/resumes/:id/projects`, () => {
    return HttpResponse.json();
  }),
  http.post(`${environments.baseUrlEnv()}/v1/resumes/:id/activities`, () => {
    return HttpResponse.json();
  }),
  http.post(`${environments.baseUrlEnv()}/v1/resumes/:id/certifications`, () => {
    return HttpResponse.json();
  }),
  http.post(`${environments.baseUrlEnv()}/v1/resumes/:id/foreignLanguages`, () => {
    return HttpResponse.json();
  }),
  http.post(`${environments.baseUrlEnv()}/v1/resumes/:id/trainings`, () => {
    return HttpResponse.json();
  }),
];
