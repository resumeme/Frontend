import { HttpResponse, http } from 'msw';
import { environments } from '~/config/environments';
import { MyResume } from '~/types/resume/resumeListItem';

const myResumesMock: MyResume[] = [
  {
    id: 0,
    title: '이력서 버전1',
    modifiedAt: '2024-02-25T23:59:59.999Z',
    position: 'Front-End',
    memo: '',
  },
  {
    id: 0,
    title: '이력서 버전2',
    modifiedAt: '2024-03-01T23:59:59.999Z',
    position: 'Front-End',
    memo: '',
  },
  {
    id: 0,
    title: '최종 이력서',
    modifiedAt: '2024-05-02T23:59:59.999Z',
    position: 'Front-End',
    memo: '아몬드빼빼로 서합한 이력서',
  },
];

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
  http.get(`${environments.baseUrlEnv()}/v1/resumes`, () => {
    return HttpResponse.json(myResumesMock);
  }),
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
