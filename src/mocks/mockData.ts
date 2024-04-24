import { ReadEvent } from '~/types/event/event';
import { EventList } from '~/types/event/eventList';
import { PageData } from '~/types/pageData';

export const readEventMock: ReadEvent = {
  id: 123,
  mentorId: 123,
  title: '웹 개발자 이력서 5일 간 첨삭',
  content: '프론트, 백 관계 없이 웹 개발을 희망하시는 분들 이력서 피드백 드릴게요',
  maximumCount: 3,
  currentApplicantCount: 1,
  status: 'OPEN',
  positions: ['FRONT', 'BACK'],
  timeInfo: {
    openDateTime: '2024-04-24T08:00:00.000Z',
    closeDateTime: '2024-04-30T23:59:59.999Z',
    endDate: '2024-05-01T23:59:59.999Z',
  },
};

const pageDataMock: PageData = {
  first: true,
  last: false,
  number: 0,
  size: 20,
  sort: {
    empty: true,
    sorted: false,
    unsorted: true,
  },
  totalPages: 5,
  totalElements: 100,
};

export const eventListMock: EventList = {
  events: [
    {
      info: readEventMock,
      mentorInfo: {
        mentorId: 123,
        nickname: '윤지석',
        imageUrl: '',
      },
    },
    {
      info: readEventMock,
      mentorInfo: {
        mentorId: 123,
        nickname: '김지석',
        imageUrl: '',
      },
    },
  ],
  pageData: pageDataMock,
};
