import { HttpResponse, http } from 'msw';
import {
  eventListMock,
  readEventMock1,
  readEventMock2,
  readEventMock0,
  readEventMock3,
} from './event.mock';
import { environments } from '~/config/environments';
import { FeedbackResume } from '~/types/resume/resumeListItem';

const allEvents = new Map();
allEvents.set('0', readEventMock0);
allEvents.set('1', readEventMock1);
allEvents.set('2', readEventMock2);
allEvents.set('3', readEventMock3);

const eventResumesMock: FeedbackResume[] = [
  {
    resumeTitle: '이력서 버전4',
    eventId: 0,
    resumeId: 0,
    status: 'COMPLETE',
    title: '이번 봄은 취업하자! 웹 개발 이력서 봐드립니다.',
    mentorName: '손웅정',
    startDate: '2024-04-02T12:00:00.000Z',
    endDate: '2024-05-02T12:00:00.000Z',
  },
  {
    resumeTitle: 'FE 이력서 버전1',
    eventId: 0,
    resumeId: 0,
    status: 'REJECT',
    title: '백엔드 이력서 봐드립니다.',
    mentorName: '손웅정',
    startDate: '2024-03-02T12:00:00.000Z',
    endDate: '2024-04-01T12:00:00.000Z',
    rejectMessage: '직무를 잘못 보신 것 같아요! 백엔드만 첨삭합니다.',
  },
];

export const handlers = [
  http.get(`${environments.baseUrlEnv()}/v1/events`, () => {
    return HttpResponse.json(eventListMock);
  }),
  http.get(`${environments.baseUrlEnv()}/v1/events/:id`, ({ params }) => {
    const { id } = params;
    const event = allEvents.get(id);
    return HttpResponse.json(event);
  }),
  // 이벤트 참여 이력서
  http.get(`${environments.baseUrlEnv()}/v1/mentees/:menteeId/events`, () => {
    return HttpResponse.json(eventResumesMock);
  }),
];
